
import { State } from './state'

// declare global {
//     interface DefaultRootState {
//         auth: number
//     }
// }

declare module '@types/react-redux' {
    interface DefaultRootState extends State {}
}