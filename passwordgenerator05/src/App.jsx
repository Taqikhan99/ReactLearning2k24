import { useCallback, useState ,useEffect,useRef} from 'react'



function App() {
  const [length, setLength] = useState(6)
  const [numAllowed, setNumAllowed] = useState(false)
  const [spCharAllowed, setSpCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  const passwordRef = useRef(null)

  //copy passwrd method
  const copyToClipBoard = useCallback(()=>{
      passwordRef.current?.select()
      window.navigator.clipboard.writeText(password)
      document.getElementById('alertcopy').classList.remove('invisible')
      document.getElementById('alertcopy').classList.add('visible')
      setTimeout(() => {
        document.getElementById('alertcopy').classList.remove('visible')
        document.getElementById('alertcopy').classList.add('invisible')
      }, 3000);

      // document.getElementById('alertcopy').classList.add('invisible')

  },[password])

  // generate password 

  const passwordGenerator = useCallback(()=>{

    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed){
      str +="0123456789"
    }
    if(spCharAllowed){
      str +="!@$%^&*(){}<>/"
    }

    //traverse the loop till length
    for (let index = 1; index <= length; index++) {
      
      let char = Math.floor(Math.random()*str.length+1)

      pass+= str.charAt(char)
      
    }
    setPassword(pass)


  },[length,numAllowed,spCharAllowed,setPassword])

  //calling the func inside useEffect
  useEffect(() => {

    console.log("Re rendering ...");
    
    passwordGenerator()
  }, [length,numAllowed,spCharAllowed,setPassword]);


  return (
   
      <div>

<div id='alertcopy' className="p-4 mx-auto w-60 text-center mb-5 mt-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 invisible"  role="alert">
  <span  className="text-lg ">Text Copied Successfully!</span> 
</div>

     <h1 className= 'text-center my-4 text-5xl text-white'>Password Generator</h1>
     
      <div className='mx-auto rounded-md w-full max-w-4xl p-3 bg-slate-800 text-red-600 shadow-sm h-72'> 
      
      <div className=' flex shadow overflow-hidden rounded-lg '>
        <input type="text"  className='text-2xl outline-none  w-full shadow-sm py-2 px-4' 
        value={password} placeholder='password' readOnly  ref={passwordRef}/>

        <button className='shrink-0 bg-blue-700 p-4 text-white' onClick={copyToClipBoard} >
        Copy
      </button>
      </div>
      <div className=' flex shadow overflow-hidden rounded-lg mt-10 justify-between'>
      
        {/* //for length */}
        <div>
        <input type="range" min={6} max={100}  value={length} className='cursor-pointer' onChange={(e)=>{setLength(e.target.value)}} />
        <label className='text-lg ms-2' >Length: {length}</label>
        </div>

        {/* //for numbers check box */}
        <div>
        <input type="checkbox" id='checkNum' defaultChecked={numAllowed} onChange={()=>{
          console.log(numAllowed);
          
          setNumAllowed((prev)=>!prev)
        }} />

          <label className='text-lg ms-2' >NumAllowed: {numAllowed?'true':'false'}</label>
        </div>
 {/* //for character check box */}

 <div>
        <input type="checkbox" id='checkChar' defaultChecked={spCharAllowed} onChange={()=>{
          console.log(spCharAllowed);
          
          setSpCharAllowed((prev)=>!prev)
        }} />

          <label className='text-lg ms-2' >CharAllowed: {spCharAllowed?'true':'false'}</label>
        </div>
        </div>
       

        </div>

      </div>

     
    
  )
}

export default App
