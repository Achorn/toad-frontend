import { TheToad } from "./TheToad";
import { DeleteToad } from "./buttons/DeleteToadButton";
import { EducateButton } from "./buttons/EducateButton";
import { FeedButton } from "./buttons/FeedButton";

export const ToadGame = () => {
  return (
    <div>
      <TheToad />
      <div>
        <EducateButton />
        <FeedButton />
      </div>
      <DeleteToad />
    </div>
  );
};
