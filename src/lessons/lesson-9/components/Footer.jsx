import SwitchLanguage from './language/SwitchLanguage'
import SwitchTheme from './theme/SwitchTheme'

const Footer = () => {
    return (
        <div>
            <p className='font-semibold'>Bu kısım footer</p>
            <SwitchTheme /> 
            <SwitchLanguage />
        </div>
    )
}

export default Footer