import Button from './html/Button'
import Input from './html/Input'
import CheckBox from './html/CheckBox'

const App = () => {
  return (
    <>
      <div className='item-middle'>
        <Button type='button' className='bg-[#4f4f4f]' name='add-btn' disabled={false}>Add</Button>
        <Button type='button' className='bg-[#e13333]' name='cancel-btn' disabled={false}>Cancel</Button>
        <Button type='button' className='bg-[#8d196c]' name='success-btn' disabled={false}>Success</Button>

        <Input className={'rounded-md'}> Enter Todo List</Input>
        <br/>
        <br/>

        <CheckBox className={'accent-slate-600 text-white'}> I agree with terms and plicies</CheckBox>
      </div>  
    </>
  )
}
export default App;