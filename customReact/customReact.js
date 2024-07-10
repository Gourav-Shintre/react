function cutomRender(reactElement,container){
    // const domElement=createElement(reactElement.type)
    // domElement.innerHTML=reactElement.children
    // domElement.setAttribute ('href',reactElement.props.href)
    // domElement.setAttribute ('target',reactElement.props.target)
    // conatiner.appendChild(domElement)

    // first step we created element at this time we create "a tag" but later time if we  want to add aother type of element thats why we use reactelemnt.type
    const domElement=document.createElement(reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const i in reactElement.props) {
        if(i==='children') continue

        domElement.setAttribute(i,reactElement.props[i])
    }
    container.appendChild(domElement)

}
const reactElement= {
    type : 'a',
    props: {
        href: "https://google.com",
        target:'_blank'
    },
    children: 'Click me to visit gogle'
}

const maincontainer= document.getElementById('root')

cutomRender(reactElement,maincontainer)
// customRendor is a method which takes two parameters first one is what you want to inject and second is where to inject

// props = means like attribute