import { motion } from 'framer-motion'

const MotionBox = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{background:'skyblue', padding: 20}}
        >
            <h2>Motion Box</h2>
        </motion.div>
    )
}

export default MotionBox