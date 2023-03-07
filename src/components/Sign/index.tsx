import { Sign } from "./style"
import { motion } from "framer-motion"


export const BlueSign = () =>{
    return(
        <Sign>
            <motion.div className="mainDiv"
            initial={{x: -1200}}
            animate={{x:-10}}
            transition={{delay: 0.2}}
            >
                <h1>Velocidade e experiência em um lugar feito para você</h1>
                <p>Um ambiente feito para você explorar o seu melhor</p>
                <div>
                    <button>Carros</button>
                    <button>Motos</button>
                </div>
            </motion.div>
        </Sign>
    )
}