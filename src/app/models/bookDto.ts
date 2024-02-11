export interface bookDto{
  bookId: number,
  bookInfo: bookInfoDto,
  lastModified: Date
}


export interface bookInfoDto{
  bookTitle: string,
  author: string,
  bookDescription: string,
  coverBase64: string,
}
