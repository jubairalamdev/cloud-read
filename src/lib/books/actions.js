import bookData from "@/database/bookData.json"
import categoryData from "@/database/categoryData.json"

export const getCategories = () => {
  return categoryData;
}

export const getBooksByCategoryId = (cat_id) => {
  if(cat_id==1){
    return bookData;
  }
  else {
    const filteredData = bookData.filter(book => book.categoryId == cat_id);
    console.log(filteredData)
    return filteredData;
  }
};

export const getBooksBySearchQuery = (query) => {
    if (query.length < 1){ return bookData;}
    const cleanQuery = query.toLowerCase().trim();
    return bookData.filter(book => 
    book.title.toLowerCase().includes(cleanQuery)
  );
};