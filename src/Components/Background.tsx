import wallpaper from 'images/wallpaper.png'
import styles from 'styles/components/background.module.scss'
import storage from 'src/utils/functions/storage'

const BG = () => {
    return (
        <img
            className={styles.bg}
            src={
                !!storage.getItem('background') === false
                    ? wallpaper
                    : storage.getItem('background').toString()
            }
            alt=''
        />
    )
}

export default BG
