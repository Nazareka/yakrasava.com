import React, { useState, useRef, Fragment, useEffect, MutableRefObject } from 'react'
import userServiceInstance from '../../../services/UserService'
import handlerCropAndMoveImage from "../../../tools/handlerCropAndMoveImage"
import TUseState from '../../../typescript/TUseState'
import { createProfile } from '../actions'

interface handleImageCropProps { 
    canvas: MutableRefObject<HTMLCanvasElement | null>, 
    canvasImg: MutableRefObject<HTMLImageElement | null>
}

interface TUserImage {
    url: any
}

const CreateProfile = () => {
    const canvas = useRef(null) as MutableRefObject<HTMLCanvasElement | null>
    const canvasFrame = useRef(null) as MutableRefObject<HTMLCanvasElement | null>
    const canvasImg = useRef(null) as MutableRefObject<HTMLImageElement | null>
    const img = useRef(null)
    const [userImage, setUserImage] = useState({
        url: null
    }) as TUseState<TUserImage>
    const [test, setTest] = useState({
        url: false
    })
    const [userImageResult, setUserImageResult] = useState(null) as TUseState<null | Blob>
	const handleFormSubmit = (event: any) => {
        event.preventDefault()
        const formData: any = new FormData(event.target)
        const [, nickname, location, gender, date_of_birth] = formData
        const dataProfile: any = new FormData()

        const profile: any = {
            nickname: nickname[1],
            location: location[1],
            gender: gender[1],
            date_of_birth: date_of_birth[1],
            image: userImageResult
        }

        const validation = () => {
            let is_valid = false
            if (profile.nickname.length < 4) {
                alert('nickname must be more than 4 letters')
            } else if (!/^[A-Za-z][A-Za-z0-9_]+$/.test(profile.nickname)) {
                alert('nickname must start with letter and contain only numbers, letters and underscore') 
            } else {
                is_valid = true
            }
            return is_valid
        }

        if (validation() === true) {
            dataProfile.append('nickname', profile.nickname)
            dataProfile.append('location', profile.location)
            dataProfile.append('sex', profile.gender)
            dataProfile.append('date_of_birth', profile.date_of_birth)
            dataProfile.append('image', profile.image, 'profile.png')
            
            createProfile(dataProfile)

        }
    }
       
    
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
        let reader = new FileReader()
        let file = event!.target!.files![0]
        reader.onloadend = () => {
            setUserImage({
                url: reader.result
            })
        }
        reader.readAsDataURL(file)
    }

    const handleImageCrop = ({ canvas, canvasImg }: handleImageCropProps): void => {
        const currentCanvasUrl = canvas!.current!.toDataURL("image/png")
        canvasImg!.current!.src = currentCanvasUrl
        setTest({
            url: true
        })
    }
    const dataURItoBlob = (dataURI: any) =>  {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1])
        else
            byteString = unescape(dataURI.split(',')[1])
    
        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split('')[0]
    
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length)
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i)
        }
        return new Blob([ia], {type:mimeString})
    }

    useEffect(() => {
        if (test.url !== false) {
            const newCanvas: any = document.createElement("CANVAS")
            const left = -((canvas!.current!.width - 300) / 2),
                  top =  -((canvas!.current!.height - 405) / 2)
            newCanvas.width = 300
            newCanvas.height = 405
            newCanvas.getContext('2d').drawImage(canvasImg.current, left, top)
            const currentCanvasUrl = newCanvas.toDataURL("image/png")
            setUserImageResult(dataURItoBlob(currentCanvasUrl))
        }
    }, [canvas, canvasImg, test, setUserImageResult])

    useEffect(() => {
        if (userImage.url !== null) {
            handlerCropAndMoveImage(canvas.current, canvasFrame.current, img.current)
        }
    }, [userImage, canvasFrame, canvas])
    

    return (  
        <div>
            <div>
                create profile
            </div>
            <form onSubmit={handleFormSubmit} >
                <div>
                    <div>
                        {(userImage.url !== null) ? 
                        <Fragment>
                            <img src={userImage.url} ref={img} id='imgkek' alt="preloaded-user" 
                                 style={{"display": "none"}} />
                            <div style={{"position": "absolute", "zIndex": 100}}>
                                <div>
                                    <canvas ref={canvasFrame} style={{"border": "1px solid blue"}} />
                                </div>
                            </div> 
                            <div style={{"zIndex": 100, "position": "relative"}}>
                                <div>
                                    <canvas ref={canvas}  />
                                </div>
                            </div>
                            <img ref={canvasImg} alt="prepreloaded-user" style={{"display": "none"}} />
                            <button onClick={() => handleImageCrop({ canvas, canvasImg })} >
                                crop
                            </button>
                        </Fragment>
                        : null }
                    </div>
                    <label>
                        Profile photo
                        <input className="fileInput" 
                               type="file" 
                               name="image"
                               onChange={ (event) => {handleImageUpload(event)}} 
                        />
                    </label>
                </div>
                <div>
                    <label>
                        nickname
                        <input type="text" name="nickname" required/>
                    </label>
                </div>
                <div>
                    <label>
                        location
                        <input type="text" name="location" required/>
                    </label>
                </div>
                <div>
                    <label>
                        sex
                    </label>
                    <div>
                        <input type="radio" id="male" name="gender" value="ML" />
                        <label htmlFor="male">man</label>
                    </div>
                    <div>
                        <input type="radio" id="female" name="gender" value="FM" />
                        <label htmlFor="female">female</label>
                    </div>
                    <div>
                        <input type="radio" id="other" name="gender" value="OT" />
                        <label htmlFor="other">other</label>
                    </div>
                </div>
                <div>
                    <label>
                        date of birth
                        <input type="date" id="start" name="date_of_birth"
                                defaultValue="2000-01-01"
                                min="1900-01-01" max="2018-12-31" />
                    </label>
                </div>
                <button type="submit">
                    <span>
                        sign up
                    </span>
                </button>
            </form>
      </div>
    )
}
 
export default CreateProfile