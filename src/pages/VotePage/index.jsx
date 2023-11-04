import Header from "../../components/Header";
import { Vote } from "../../components/Vote";
import { VotePageUi } from "./style";

export default function VotePage() {
  return (
    <VotePageUi>
      <Header></Header>
      <Vote></Vote>
    </VotePageUi>
  );
}
