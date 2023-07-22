import React from "react";
import { useState } from "react";

let dummy_result = {
  status: "success",
  cart_count: 0,
  categories: [
    {
      sub_categories: [],
    },
  ],
};

const common_data_api =
  "https://phpwebdevelopmentservices.com/project-react-backend/api/common-data";
const search_data_api =
  "https://phpwebdevelopmentservices.com/project-react-backend/api/common-data";

// get some dummy data
const commonData = await postApiData(common_data_api, {
  params: {
    cat_slug: "category-slug",
    sort_by: 1,
    category_id: 1,
    sub_category_id: 1,
    keyword: "keyword",
    price_range: [0, 1000],
    offset: 0,
  },
})
  .then((data) => {
    console.error("Search Request Result:", data.result);
    dummy_result.categories = data.result.categories;
    return data.result;
  })
  .catch((error) => {
    console.error("Search Request Error:", error);
    return [];
  });

const SearchPage = ({
  AppState: [[token, setToken], [keyword, setKeyword], [cart, setCart]],
}) => {
  console.log("Updated SearchPage: " + keyword);

  // Set initial state for the currentCategory and subcategories
  const [resultState, setResultState] = useState({
    found: false,
    result: dummy_result,
  });
  const result = resultState.result;
  const [currentCategory, setCurrentCategory] = React.useState(
    result.categories[0]
  );
  const [priceRange, setPriceRange] = React.useState([0, 1000]);

  if (!resultState.found) {
    postApiData(search_data_api, {
      params: {
        cat_slug: currentCategory.slug,
        sort_by: 1,
        category_id: currentCategory.id + 1,
        sub_category_id: 1,
        keyword: keyword,
        price_range: priceRange,
        offset: 0,
      },
    })
      .then((data) => {
        console.log("Search Request Response:", data);
        setResultState({
          found: true,
          result: data.result,
        });
        setCurrentCategory(data.result.categories[0]);
      })
      .catch((error) => {
        console.error("Search Request Error:", error);
      });
  }

  // Create List of Categories for selecting from dropdown
  const categories = result.categories.map((category) => (
    <option
      key={category.name}
      onClick={() => handleCategorySelect(category.name.id)}
    >
      {category.name}
    </option>
  ));
  // Create dropdown menu list for selecting Sub Category of Product
  const sub_categories_options = currentCategory.sub_categories.map(
    (sub_category) => (
      <li key={sub_category.id}>
        <label className="contect_container_checkBox">
          {sub_category.name}
          <input
            type="checkbox"
            defaultChecked={sub_category.status == 1 ? "checked" : "unchecked"}
            name="text"
          />
          <span className="contect_checkmark"></span>
        </label>
      </li>
    )
  );

  // Create cards views for products in the search results
  const sub_categories_cards = currentCategory.sub_categories ? (
    currentCategory.sub_categories.map((sub_category) => (
      <div key={sub_category.id} className="search_proo">
        <div className="srch_pic_box">
          <img
            src={`images/search${sub_category.id + 1}.jpg`}
            alt={sub_category.name}
          ></img>
          <span>
            <a href="#">Call For Enquiry</a>
          </span>
        </div>
        <div className="srch_dtls_box">
          <a href="#">{sub_category.name}</a>
          <p>Rs 20.00</p>
        </div>
      </div>
    ))
  ) : (
    <p>No products found</p>
  );

  // Create Page Links in the Product Area
  const itemsPerPage = 8;
  const totalItems = currentCategory.sub_categories.length;
  const pageCount = Math.floor(totalItems / itemsPerPage);
  const pageList = [];

  let _currentPage = 0;
  if (_currentPage == null) _currentPage = 0;
  if (_currentPage < 3) _currentPage = 2;
  if (_currentPage > pageCount - 3) _currentPage = pageCount - 1;

  const [currentPage, setCurrentPage] = useState(_currentPage);
  const itemStartIndex = currentPage * pageCount;
  const itemEndIndex = (currentPage + 1) * pageCount;

  if (totalItems > 0) {
    // previous page arrow
    pageList.push(
      <li key="page_prev">
        <a
          href="#"
          onClick={(e) => setCurrentPage(currentPage > 0 ? currentPage - 1 : 0)}
        >
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </a>
      </li>
    );

    for (var i = 0; i < pageCount; i++) {
      //if first page or last page or any three middle pages, then show page number
      if (
        i == 0 ||
        i == pageCount - 1 ||
        Math.abs(currentPage - i - 1) < itemsPerPage
      ) {
        //if lots of pages remaining before last page, then show "..." before page number
        if (i > pageCount - 4 && currentPage < i - itemsPerPage + 1)
          pageList.push(
            <li key={`page${i}`}>
              <a href="#">...</a>
            </li>
          );

        //show any middle 3 pages
        pageList.push(
          <li key={`page${i}`}>
            <a href="#" onClick={(e) => setCurrentPage(i)}>
              {i + 1}
            </a>
          </li>
        );

        //if lots of middle pages remaining after first page, then show "..." after page number
        if (i < 3 && currentPage > i + itemsPerPage + 1)
          pageList.push(
            <li key={`page${i}`}>
              <a href="#">...</a>
            </li>
          );
      }
    }
    // next page arrow
    pageList.push(
      <li key="page_next">
        <a
          href="#"
          onClick={(e) =>
            setCurrentPage(
              currentPage > pageCount - 1 ? pageCount - 1 : currentPage
            )
          }
        >
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </a>
      </li>
    );
  }

  // Function to handle category selection
  const handleCategorySelect = (categoryId) => {
    const selectedCategory = result.categories.find(
      (category) => category.id === categoryId
    );
    setCurrentCategory(selectedCategory);
  };

  return (
    <div className="search_main_section">
      <div className="container">
        <div className="row res_padd">
          <div className="bread_crumb">
            <a href="#">Home</a>
            <span>
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
            <a href="#">{currentCategory.name}</a>
          </div>

          <div className="mobile_filter">
            {" "}
            <i className="fa fa-filter" aria-hidden="true"></i>
            <p>Show Filter</p>
          </div>

          {/* left */}
          <div className="laft_search_panel">
            <h3>Filter Options</h3>

            <div className="form_group" style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Keyword"
                className="search-input"
                defaultValue={keyword}
              ></input>
              <img src="images/icon36.png" className="search_icon" />
            </div>

            <div className="form_group">
              <label className="search_label">Category</label>
              <select className="slectt">{categories}</select>
            </div>

            <div className="form_group">
              <label className="search_label">Sub Category</label>
              <ul className="c_ul">{sub_categories_options}</ul>
            </div>

            <div className="form_group">
              <label className="search_label">Price Range</label>
              <div className="slider_rnge">
                <div
                  id="slider-range"
                  className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                >
                  <div
                    className="ui-slider-range ui-widget-header ui-corner-all"
                    style={{ left: "0%", width: "100%" }}
                  ></div>
                  <span
                    tabIndex="0"
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    style={{ left: "0%" }}
                  ></span>
                  <span
                    tabIndex="0"
                    className="ui-slider-handle ui-state-default ui-corner-all"
                    style={{ left: "100%" }}
                  ></span>
                </div>
                <span className="range-text">
                  <input
                    type="text"
                    className="price_numb"
                    readOnly
                    id="amount"
                    value={`Rs.${priceRange[0]} - Rs.${priceRange[1]}`}
                  ></input>
                </span>
              </div>
            </div>

            <button type="submit" className="search-submit1">
              Filter
            </button>
          </div>

          {/* right */}
          <div className="right_search_panel">
            <div className="evnt_shot_by_main">
              <label className="event-sort">
                Showing {itemStartIndex}-{itemEndIndex} out of {totalItems}{" "}
                product for {currentCategory.name}
              </label>
              <div className="sort-filter">
                <p>Sort by :</p>
                <select className="sort-select">
                  <option>Select</option>
                  <option>Price - Low to High</option>
                  <option>Price - High to Low </option>
                </select>
              </div>
            </div>

            {sub_categories_cards}

            <div className="w-100"></div>

            <div className="pagination_area">
              <ul>{pageList}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

async function postApiData(url, postData, auth_token) {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    if (auth_token) {
      headers["Authorization"] = `Bearer ${auth_token}`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}
