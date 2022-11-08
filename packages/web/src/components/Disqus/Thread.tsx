import { DiscussionEmbed } from "disqus-react";

const Thread = ({ ...props }: any) => {
  return <DiscussionEmbed {...props} />;
};

export default Thread;
