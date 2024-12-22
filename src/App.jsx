import './App.css'
import Card from './components/Card'

function App() {

  const Data = [
    {
      id:1,
      title:"Title 1",
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, officiis?",
      imgSrc:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },
    {
      id:2,
      title:"Title 2",
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, officiis?",
      imgSrc:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },
    {
      id:3,
      title:"Title 3",
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, officiis?",
      imgSrc:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },
    {
      id:3,
      title:"Title 4",
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, officiis?",
      imgSrc:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },
    {
      id:3,
      title:"Title 5",
      description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, officiis?",
      imgSrc:"https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg",
    },
  ]

  return (
    <>
    <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",}}>

      {
        Data ? Data.map((e,i)=>{
          return <Card key={e.id} imgSrc={e.imgSrc} title={e.title} desc={e.description} />    
        }) : <h1>No Data  Found</h1>
      }
      </div>
    </>
  )
}

export default App
