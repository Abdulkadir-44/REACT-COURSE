import SwitchTheme from './theme/SwitchTheme'
import SwitchLanguage from './language/SwitchLanguage'

const Header = () => {
    return (
        <div>
            <p className='font-semibold'>Bu kısım header</p>
            <SwitchTheme /> 
            <SwitchLanguage />
        </div>
    )
}

export default Header