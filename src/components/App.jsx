import React, { Component } from "react";
import getData from "services/getData";
import Button from "./button/Button";
import ImageGallery from "./imageGallery/ImageGallery";
import Loader from "./loader/Loader";
import { Modal } from "./modal/Modal";
import Searchbar from "./searchbar/Searchbar";

export class App extends Component {
  state = {
    images: [],
    showLoader: true,
    currentPage: 1,
    searchBar: "",
    totalHits: '',
    selectedImage: null,
  };

  searchSubmit = async (text) => {

    this.setState({
      searchBar: text,
      images: [],
      showLoader: true,
    });
    const response = await getData(text);

    if (response?.totalHits) {
      this.setState({
        images: response.hits,
        showLoader: false,
        currentPage: 1,
        totalHits: response?.totalHits,
      });
    }
  };

  loadMore = async () => {

    const response = await getData(
      this.state.searchBar,
      this.state.currentPage + 1
    );

    if (response?.totalHits) {
      this.setState((prevState) => ({
        images: [...prevState.images, ...response.hits],
        currentPage: prevState.currentPage + 1,
      }));
    }

  };

  handleImageClick = (largeImageURL) => {
    this.setState({ selectedImage: largeImageURL });
  };

  handleCloseModal = () => {
    this.setState({ selectedImage: null });
  };

  componentDidMount() {
    this.searchSubmit("car");
  }

  render() {
    const { images, showLoader, totalHits, selectedImage } = this.state;

    return (
      <div className="App">
        <header>
          <Searchbar onSearchSubmit={this.searchSubmit} />
        </header>

        <main>
          {showLoader ? (
            <Loader />
          ) : (
            <>
              <ImageGallery images={images} handleImageClick={this.handleImageClick} />
              {images.length < totalHits && <Button loadMore={this.loadMore} />}
            </>
          )}


        </main>

        {selectedImage && (
          <Modal
            imageUrl={selectedImage}
            altText="Selected Image"
            handleCloseModal={this.handleCloseModal}
          />
        )}
      </div>

    );
  }
}

export default App;
