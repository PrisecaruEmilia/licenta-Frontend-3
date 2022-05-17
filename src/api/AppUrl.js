class AppUrl {
  static BaseURL = 'http://127.0.0.1:8000/api';
  static VisitorDetails = this.BaseURL + '/get-visitor';
  static PostContact = this.BaseURL + '/post-contact';
  static AllSiteInfo = this.BaseURL + '/all-site-info';
  static AllCategoryDetails = this.BaseURL + '/all-category';

  static ProductListByRemark(remark) {
    return this.BaseURL + '/product-list-remark/' + remark;
  }

  static ProductListByCategory(category) {
    return this.BaseURL + '/product-list-category/' + category;
  }

  static ProductListBySubCategory(category, subcategory) {
    return (
      this.BaseURL + '/product-list-subcategory/' + category + '/' + subcategory
    );
  }
}

export default AppUrl;
