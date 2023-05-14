import { SAVE_BIG_LEAGUE } from "../actionTypes/types";
import { saveBigLeague } from "../actions/actions";

// 리듀서 파라미터 중 initialState의 타입 정의
type LeagueStateType = {
  leagueData: Array<any>;
};

const initialState = {
  leagueData: [],

};

// 리듀서 파라미터 중 action의 타입 정의
type LeagueActionType =
  | ReturnType<typeof saveBigLeague>;

export default function leagueReducer(
  state: LeagueStateType = initialState,
  action: LeagueActionType
) {
  switch (action.type) {
    case SAVE_BIG_LEAGUE:
      return { ...state, leagueData: state.leagueData.concat(action.payload) };

    default:
      return state;
  }
}