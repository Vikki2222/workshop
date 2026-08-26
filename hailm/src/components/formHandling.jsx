import '../index.css';
import { useState } from 'react'

const Web = () => {
    const [formData, setFormData] = useState({});

    const handleChange = (e) =>{
        let{name,value} = e.target

        setFormData({...formData ,[name]:value});
        

    }

    return (
        <div className='form-container gap-14'>

            <input className='border-4'
            name='name'
            onChange={handleChange}
            placeholder="Enter your name" 
            type="text" />
            <input className='border-4'
            name='email'
            onChange={handleChange}
            placeholder="Enter your email" 
            type="email" />
            <input className='border-4'
            name='password'
            onChange={handleChange}
            placeholder="Enter your password" 
            type="password" />

            <p> Heyyyyy - {formData.name}</p>
          

        </div>
        
    );
}
export default Web;