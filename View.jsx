
import {AiFillDelete} from 'react-icons/ai'


function View({books,setBooks}) {
    const deleteBook=(index)=>{
        const filterbook=books.filter((value,ind)=>{
            return ind!==index
        })
        setBooks(filterbook);

        
    }
  return (
    <>
        {books.map((value,index)=>{
            return(
                <tr key={index}>
                    <td>{value.title}</td>
                    <td>{value.author}</td>
                    <td>{value.bookNo}</td>
                    <td onClick={()=>{deleteBook(index)}}><AiFillDelete/></td>
                </tr>
            )
        })
            
}    
    </>
  )
}

export default View