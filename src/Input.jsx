import {useState} from 'react'

let nextId = 0;

const Input = () => {
  
  const [inputValue, setInputValue] = useState('');
  const [listItems, setItems] = useState([]);

  function handleButtonClick() {
    setInputValue('');
    setItems([
      ...listItems, {id: nextId++, inputValue: inputValue}
    ]);
  }; 
  
  return (
    <form>
      <div className="row m-3">
        <div className='col-8'>
          <input className="form-control justify-content-center" type={'text'} 
            value={inputValue} onChange={e => setInputValue(e.target.value)} />
        </div>
        <div className='col-4'>
          <button className="form-control bg-primary text-white" type='button' onClick={handleButtonClick}>Add</button>
        </div>
        <div>
          <ul  className='mt-3 pb-2'>
              {listItems.map(item => (<li id={item.id} key={item.id}>{item.inputValue} {' '}
                <button className='rounded bg-danger m-1 text-white' type='button' onClick={() => {setItems(
      listItems.filter(i => i.id !== item.id)
                )}}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  )
}

export default Input