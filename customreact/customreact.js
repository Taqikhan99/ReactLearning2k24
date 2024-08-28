
//we will make an element to see how react sees an element after commpiling it i.e making a tree

const reactElement ={
    type: 'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click to go to google'
}

const mainContainer = document.getElementById('root')

//creating the render method accepting params [elementToCreate,Container]

function customRender(param1,param2){

        const elem = document.createElement(param1.type)
        elem.innerHTML= param1.children
        elem.setAttribute('href',param1.props.href)
        elem.setAttribute('target',param1.props.target)

        //append to container
        param2.appendChild(elem)
}

//calling the render method
customRender(reactElement,mainContainer)
