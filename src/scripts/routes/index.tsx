import React from "react"
import { Route, Switch, Redirect } from "react-router"

import Login from "../components/Login/Login"
import Registration from '../components/Registration/Registration'
import Header from "../components/Header/Header"
import CreateProfile from "../components/CreateProfile/CreateProfile"
import AnProfile from '../apps/profile/pages/AnProfile'
import MyProfile from '../apps/profile/pages/MyProfile'
import Chats from '../components/Chats/Chats'
import Chat from '../components/Chat/Chat'
import UnAuthContainer from "../containers/UnAuthContainer"
import AuthContainer from "../containers/AuthContainer/AuthContainer"
import ProfileIdContext from '../contexts/ProfileIdContext'
import Friends from "../components/Friends/Friends"
import { useSelector } from "react-redux"
import { AccessType } from "../apps/auth/enums"


export const MainRouter = (): JSX.Element => {

    const authState = useSelector(state => state.auth)

    return (
        <Route path="/">
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/registration" >
                    <Registration />
                </Route>
                { authState.accessType === AccessType.AUTHORIZED_NO_PROFILE 
                    ? <Route exact path="/create_profile" >
                        <CreateProfile />
                    </Route>
                    : null
                }
                <Route exact path="/create_profile" >
                    <CreateProfile />
                </Route>
                {(
                    authState.refreshed 
                    && authState.accessType === AccessType.AUTHORIZED_NO_PROFILE) 
                    ? <Redirect to="/create_profile" /> : null }
                <Route path="/">
                    <Header loggedIn={authState.refreshed} />

                    { authState.accessType === AccessType.AUTHORIZED ? 
                    <ProfileIdContext.Provider value={authState.profile_id} >
                        <Switch>
                            <Route exact path="/profile_id=:profile_id" >
                                <AuthContainer currentBlock={null}>
                                    <AnProfile />
                                </AuthContainer>
                            </Route>
                            <Route exact path="/my_profile">
                                <AuthContainer currentBlock={'my_profile'}>
                                    <MyProfile />
                                </AuthContainer>
                            </Route>
                            <Route exact path="/chats">
                                <AuthContainer currentBlock={'chats'}>
                                    <Chats />
                                </AuthContainer>
                            </Route>
                            <Route exact path="/chat/id=:chat_id">
                                <AuthContainer currentBlock={null}>
                                    <Chat />
                                </AuthContainer>
                            </Route>
                            <Route exact path="/friends">
                                <AuthContainer currentBlock={'friends'}>
                                    <Friends />
                                </AuthContainer>
                            </Route>
                            <Route path="/">
                                <Redirect exact from="/" to="/my_profile" />
                            </Route>
                        </Switch>
                    </ProfileIdContext.Provider>
                    :
                    <Switch>
                        <Route exact path="/profile_id=:profile_id" >
                            <UnAuthContainer>
                                <AnProfile />
                            </UnAuthContainer>
                        </Route>
                        <Route exact path="/my_profile">
                            <Redirect to="/login" />
                        </Route>
                        <Route exact path="/my_news">
                            <Redirect to="/login" />
                        </Route>
                        <Route exact path="/news">
                            <Redirect to="/login" />
                        </Route>
                        <Route exact path="/list_users">
                            <Redirect to="/login" />
                        </Route>
                        <Route exact path="/friends">
                            <Redirect to="/login" />
                        </Route>
                        <Route path="/">
                            <Redirect to="/login" />
                        </Route>
                    </Switch>
                    }
                </Route>
            </Switch>
        </Route>
    )
}