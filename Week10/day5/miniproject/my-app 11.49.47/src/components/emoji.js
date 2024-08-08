import { addreaction } from "../features/emojis/emojiSlice";
import { useDispatch } from "react-redux";
import { memo } from "react";
const reactionEmoji = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    rocket: "🚀",
    coffee: "☕",
};

const ReactionButton = ({ post }) => {
    const { id, reactions } = post;
    console.log(`ReactionButton render... ${id}`);
    const dispatch = useDispatch();

    const renderReaction = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button
                key={name}
                className='reactionButton'
                onClick={() => dispatch(addreaction({ id, name }))}
            >
                {emoji} {reactions[name]}
            </button>
        );
    });

    return <div>{renderReaction}</div>;
};
export default memo(ReactionButton);
