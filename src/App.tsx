import picture from './assets/images/1.jpg'

const App = () => {
  return (
    <>
      <div>App Component</div>
      {/* src하위에 넣을 때 */}
      <img src={picture} alt="" />
      {/* pulic 폴더에 있는거 쓸 때 */}
      <img src="/1.jpg" alt="" />
    </>
  )
}
export default App;











// import Button from './html/Button'
// import Input from './html/Input'
// import CheckBox from './html/CheckBox'

// const App = () => {
//   return (
//     <>
//       <div className='item-middle flex-col gap-4'>
//         <Button type='button' className='bg-[#4f4f4f]' name='add-btn' disabled={false}>Add</Button>
//         <Button type='button' className='bg-[#e13333]' name='cancel-btn' disabled={false}>Cancel</Button>
//         <Button type='button' className='bg-[#8d196c]' name='success-btn' disabled={false}>Success</Button>

//         <Input type='text' placeholder='Enter your name'/>
//         <Input type='password' placeholder='Enter your name'/>
//         <Input type='number' placeholder='Enter your name'/>
//         <div className='flex items-center gap-2'>
//           <CheckBox type="checkbox">I agree with <strong>terms</strong> and <strong>plicies</strong>.</CheckBox>
//           <CheckBox type="checkbox">I agree with <strong>terms</strong> and <strong>plicies</strong>.</CheckBox>

//         </div>
//       </div>  
//     </>
//   )
// }
// export default App;

// const App = () => {
//   const isLogin = true;

//   return (
//     <>
//       {/* {isLogin ? <h1>Logged In</h1> : <h1>Not Logged In</h1>}
//       <h1>{isLogin ? "Logged In" : "Not Logged In"}</h1> */}
//     </>
//   )
// }
// export default App;

// const App = () => {
//   const fruits =  ["사과", "바나나", "체리", "망고", "오렌지", "포도"];
//   const listItems = [];
//   for(let i = 0; i < fruits.length; i++){
//     listItems.push(<li key={i}>{fruits[i]}</li>)
//   }
//   return (
//     <>
//       <h1>내가 좋아하는 과일은</h1>
//       {listItems}
//     </>
//   )
// }
// export default App;
