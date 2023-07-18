import React from 'react'
import {useState} from 'react'

const SearchPage = ({results}) => {

  const pageList = [];
  const catalogue = [];
  const categories = [];
  const subcategories = [];
  const [pageSize, setPageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(0);
  const [productCount, setProductCount] = useState(100);
  //const [maxPages, setMaxPages] = useState(props.pageList.length);
  const [currentCategory, setCurrentCategory] = useState(results?results.categories[0]:"All");
  console.log(results);
  // if(currentCategory) {
  //   for(let category of results.categories){
  //     categories.push(
  //       <option key={category.id}>{category.name}</option>
  //     )
  //   };

  //   for(let subCategory of currentCategory.sub_categories){
  //     subcategories.push(
  //       <li key={subCategory.id}>
  //         <label className="contect_container_checkBox">{subCategory.name}
  //           <input type="checkbox" checked={subCategory.status==1?"checked":""} name="text"></input>
  //           <span className="contect_checkmark"></span>
  //         </label>
  //       </li>
  //     )
  //   }
  // }

  // for((result, pageIndex) of props.searchResults){
  //   pageList.push(
  //     <li key={pageIndex} className={currentPage==pageIndex?.active}>
  //     {
  //       (Math.abs(pageIndex - currentPage) > maxPages && pageIndex > 0 && pageIndex < pageCount)
  //       ? <a href={pageLink}>{pageIndex}</a>
  //       : "..."
  //     }
  //     </li>
  //   );

  
  //   currentCategory.products.map((product, index) => (
  //     catalogue.push(
  //       <div key={index} className="search_proo">
  //         <div className="srch_pic_box">
  //           <img src={product.image} alt=""></img>
  //           <span><a href="#">Call For Enquiry</a></span>
  //         </div>
  //         <div className="srch_dtls_box">
  //           <a href="#">{product.name}</a>
  //           <p>{product.price}</p>
  //         </div>
  //       </div>
  //     ))
  //   )
  
  // }

  /*format

  result{
    cart_count,
    categories:{
      [ 
        id, image, "1", is_show_home, name, slug, 
        sub_categories: {
          .. same
        }

      ]
    ]
  }

  */
  
  return (
    <div className="search_main_section">
      <div className="container">
        <div className="row res_padd">

          <div className="bread_crumb">
            <a href="#">Home</a>
            <span><i className="fa fa-angle-right" aria-hidden="true"></i></span>
            <a href="#">{currentCategory}</a>
          </div>

          <div className="mobile_filter"> <i className="fa fa-filter" aria-hidden="true"></i><p>Show Filter</p></div>

          {/* left */}
          <div className="laft_search_panel">
            <h3>Filter Options</h3>

            <div className="form_group" style={{position:"relative"}}>
              <input type="text" placeholder="Keyword" className="search-input"></input>
              <img src="images/icon36.png" className="search_icon" />
            </div>

            <div className="form_group">
              <label className="search_label">Category</label>
              <select className="slectt">
                {categories}
              </select>
            </div>

            <div className="form_group">
              <label className="search_label">Sub Category</label>
              <ul className="c_ul">
                {subcategories}
              </ul>
            </div>

            <div className="form_group">
              <label className="search_label">Price Range</label>
              <div className="slider_rnge">
                <div id="slider-range" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                  <div className="ui-slider-range ui-widget-header ui-corner-all" style={{left: "0%", width: "100%"}}></div>
                  <span tabindex="0" className="ui-slider-handle ui-state-default ui-corner-all" style={{left: "0%"}}></span>
                  <span tabindex="0" className="ui-slider-handle ui-state-default ui-corner-all" style={{left: "100%"}}></span>
                </div>
                <span className="range-text">
                  <input type="text" className="price_numb" readonly id="amount"></input>
                </span>
              </div>
            </div>

            <button type="submit" className="search-submit1">Filter</button>

          </div>

          {/* right */}
          <div className="right_search_panel">

            <div className="evnt_shot_by_main">
              <label className="event-sort">Showing {currentPage*pageSize}-{(currentPage+1)*pageSize} out of {productCount} product for {currentCategory}</label>
              <div className="sort-filter">
                <p>Sort by :</p>
                <select className="sort-select">
                  <option>Select</option>
                  <option>Price - Low to High</option>
                  <option>Price - High to Low </option>
                </select>
              </div>
            </div>

            {catalogue}

            <div className="w-100"></div>

            <div className="pagination_area">
              <ul>
                <li><a href="#"><i className="fa fa-angle-left" aria-hidden="true"></i> </a></li>
                { pageList }
                <li><a href="#"> <i className="fa fa-angle-right" aria-hidden="true"></i></a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>
    </div >
  )
}

export default SearchPage
