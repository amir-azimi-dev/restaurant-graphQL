import React from "react";

const Foods = () => {
  return (
    <section className="dashboard">
      <div className="top">
        <i className="uil uil-bars sidebar-toggle"></i>

        <div className="search-box">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

        <img src="images/profile.jpg" alt="" />
      </div>

      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i className="uil uil-tachometer-fast-alt"></i>
            <span className="text">Dashboard | Foods</span>
          </div>
        </div>
        <section className="container">
          <div className="product-base-data">
            <p className="data-title">Title &amp; Description</p>
            <div className="data-card">
              <div className="data-field">
                <label for="productName" className="input-label">
                  Product name
                </label>
                <input
                  type="text"
                  id="productName"
                  className="input-element"
                  placeholder="example: Node js (Beginning to prefessional)"
                />
              </div>
              <div className="data-field">
                <div className="justify-between">
                  <label for="product-description" className="input-label">
                    Product description
                  </label>
                  <span className="link"> Or upload a .txt file </span>
                </div>
                <textarea
                  type="text"
                  id="product-description"
                  placeholder="Add a description to your product.."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="product-base-data">
            <p className="data-title">Product images</p>
            <div className="data-card row">
              <div className="data-card_box file-upload-card">
                <input type="file" accept="image/*" className="file-input" />
                <div className="drag-drop-text">
                  <img
                    src="/panel/Images/upload.png"
                    className="upload-icon"
                    alt=""
                  />
                  <p className="link z-0">Click to upload</p>
                  <p className="z-0">or drag and drop</p>
                </div>
              </div>
              <div className="data-card_box relative">
                <img
                  src="/images/course1.webp"
                  alt="cover image"
                  className="course-cover"
                />
                <div className="blur-screen"></div>
                <div className="buttons">
                  <button className="button">Replace</button>
                  <button className="button">Remove</button>
                </div>
              </div>
              <div className="data-card_box images-grid">
                <div className="minimal-item">
                  <img
                    src="/images/course2.webp"
                    alt=""
                    className="course-cover"
                  />
                </div>
                <div className="minimal-item">
                  <img
                    src="/images/course3.webp"
                    alt=""
                    className="course-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="product-base-data">
            <p className="data-title">Category</p>
            <div className="data-card">
              <div className="data-field">
                <label for="categoryName" className="input-label">
                  Category name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  className="input-element"
                  placeholder="example: front-end"
                />
              </div>
              <div className="data-field">
                <div className="justify-between">
                  <label for="product-keywords" className="input-label">
                    Keywords
                  </label>
                  <span className="link"> Or upload a .txt file </span>
                </div>
                <textarea
                  type="text"
                  id="product-keywords"
                  placeholder="example: React, Javascript, TailwindCss, etc.."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="product-base-data">
            <p className="data-title">Settings</p>
            <div className="data-card">
              <div className="data-field">
                <label for="product-shortName" className="input-label">
                  Product short-name
                </label>
                <input
                  type="text"
                  id="product-shortName"
                  className="input-element"
                  placeholder="example: javascript-expert"
                />
              </div>
              <div className="data-field">
                <label for="product-price" className="input-label">
                  Product price
                </label>
                <input
                  type="text"
                  id="product-price"
                  className="input-element"
                  placeholder="899,999T"
                />
              </div>
            </div>
          </div>
          <div className="section-footer">
            <button className="button cancel">Cancel</button>
            <button className="button apply">Apply changes</button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Foods;
