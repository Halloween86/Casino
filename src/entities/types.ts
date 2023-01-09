import { decrementBet, getBet, incrementBet } from '../actions/betActions';
import {
  incrementCredits,
  decrementCredits,
  getCredits,
} from '../actions/creditsActions';
import { getFbCredits } from '../actions/creditsFbActions';
import { getRanking } from '../actions/rankingActions';
import { getItems, shuffleItems } from '../actions/slotsActions';

export type GetFbCredits = ReturnType<typeof getFbCredits>;
export type GetRanking = ReturnType<typeof getRanking>;
export type GetBet = ReturnType<typeof getBet>;
export type IncrementBet = ReturnType<typeof incrementBet>;
export type DecrementBet = ReturnType<typeof decrementBet>;
export type ShuffleItems = ReturnType<typeof shuffleItems>;
export type IncrementCredits = ReturnType<typeof incrementCredits>;
export type DecrementCredits = ReturnType<typeof decrementCredits>;
export type GetItems = ReturnType<typeof getItems>;
export type GetCredits = ReturnType<typeof getCredits>;

export type SelectedFields = {
  value: number;
  backgroundColor: string;
  bet: number;
};
