import { FullProfile, FullProfileWithRS } from "./types"

interface InterfaceMyProfileState {
    fetchingProfile: boolean
    profile?: FullProfile
}

export type MyProfileState = InterfaceMyProfileState | null

interface InterfaceAnProfileState {
    fetchingProfile: boolean
    profile?: FullProfileWithRS
}

export type AnProfileState = InterfaceAnProfileState | null