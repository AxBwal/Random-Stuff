import React, { useState } from 'react'

function Sortablelist() {
    const [listArray,setListArray]=useState([])
    const [currentItem,setCurrentItem]=useState("")

    function inputchnager(e){
        setCurrentItem(e.target.value)
    }

    function addintoArray(){
        const newitem= currentItem;
        setListArray([...listArray,newitem])
        setCurrentItem(" ")
    }


    function Sortingasceding(){
        const currentarray= [...listArray]
       const newarrayaftersort= currentarray.sort();
       setListArray(newarrayaftersort)

    }

    function Sortingdecsnding(){
        const currentarray= [...listArray]
       const newarrayaftersort= currentarray.sort();
       setListArray(newarrayaftersort.reverse())
    }


  return (
    <div>
        <div>Sortablelist</div>

        <input value={currentItem} onChange={inputchnager} type="text" placeholder='Add a new Item' />
        <button onClick={addintoArray}>Add item</button>

        <button onClick={Sortingasceding}>Sort Accessending</button>
        <button onClick={Sortingdecsnding}>Sort Descending</button>


        <div>
            {
                listArray.map((item,index)=>{
                    return <li key={index}>
                        <li>{item}</li>
                    </li>
                })
            }
        </div>
    </div>
  )
}

export default Sortablelist