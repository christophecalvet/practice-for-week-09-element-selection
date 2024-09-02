const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seedfruits = document.querySelectorAll(".seed")
    seedfruits.forEach(element => {console.log(element.innerText)})

    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessfruits = document.querySelectorAll(".seedless")
    seedlessfruits.forEach(element => {console.log(element.innerText)})
    // 3. Get first seedless fruit element
    // Your code here
    console.log(seedlessfruits[0].innerText)

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here


    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapper = document.getElementById("wrapper")
    console.log(wrapper.children)

    // 6. Get all odd number list items in the list
    // Your code here
    const odd = document.querySelectorAll(".odd")
    odd.forEach(element => {console.log(element.innerText)})


    // 7. Get all even number list items in the list
    // Your code here
    const even = document.querySelectorAll("ol li:not(.odd)")
    even.forEach(element => {console.log(element.innerText)})

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const company = document.querySelectorAll("a:not([class])")
    company.forEach(element => {console.log(element.innerText)})

    // 9. Get "Amazon" list element
    // Your code here
    const amazon = document.querySelectorAll("a.shopping")
    amazon.forEach(element => {console.log(element)})
    // 10. Get all unicorn list elements (not the image element)
    // Your code here

    const unicorn = document.querySelectorAll("img.unicorn")
    unicorn.forEach(element => {console.log(element.parentNode)})
}

window.onload = select;
