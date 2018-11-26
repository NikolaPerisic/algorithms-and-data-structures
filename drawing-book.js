/*
Brie’s Drawing teacher asks her class to open their books to a page number. 
Brie can either start turning pages from the front of the book or from the 
back of the book. She always turns pages one at a time. When she opens the 
book, page 1 is always on the right side. When she flips page 1, she sees 
pages 2 and 3. Each page except the last page will always be printed on both 
sides. The last page may only be printed on the front, given the length of 
the book. If the book is 'n' pages long, and she wants to turn to page 'p', 
what is the minimum number of pages she will turn? She can start at the 
beginning or the end of the book.
*/
function pageCount(n, p) {
    if (p === 1 || p === n) {
        return 0;
    } else if (n - p == 1 && n % 2 == 0) {
        return 1;
    } else if (n / 2 > p) {
        return Math.floor(p / 2);
    } else {
        return Math.floor((n - p) / 2);
    }
}
console.log(pageCount(100, 22));