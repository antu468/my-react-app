function customRender(reactElement, container){
    const domElement= document.createElement(reactElement.type)
    domElement.innerHTML=reactElemement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appenChild(domElement)
}


const { Children } = require("react")

const reactElement={
    type:'h1',
    props:{
        href:'https://www.google.com',
        target:'_blank'
    },
    Children: 'Click me to visit google'
}


const mainContainer=document.querySelector('#root')