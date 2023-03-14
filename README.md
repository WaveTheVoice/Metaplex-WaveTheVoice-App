# Inspiration
A major inspiration for this project is old JRPGs from the mid 2000's. The slime is a classic monster from this style of game and manages to invoke strong nostalgia in those who are familiar with these games. I strongly believe that NFTs will be a major game changer for video games, and I want to experiment with this new approach to handling collectibles in video games.

# What it does
Players can create a monster on the Bitslimes platform using their own NFT. They are then able to take that monster and assign it abilities based on its level. Once abilities are assigned, players can enter fights with other player's monsters. All combat will be resolved on chain.

We are looking to build a world inspired by NES/SNES era pixel art, the main characters of our world are our algorithmically generated Bitslimes. We are looking to give owners of our Bitslimes the ability to vote on future features and developments of our game.

# How we built it
The game was designed in Rust using the Anchor framework. The game is also built to work with the Metaplex program ecosystem as well.

The frontend was created using React.js + solana/web3 and anchor libraries.

The art for our NFT's were not built with layers. Our hand drawn traits were converted into coordinates via a Python script for a paintbrush tool to draw on a blank canvas. We used this approach because we found it much faster during generation than a typical layer-based implementation.

# Challenges we ran into
There was a large skill curve to learning how to develop on Solana and learning how to use Rust. I found a lot of help in the discord servers dedicated to Anchor and Metaplex. Going from very little blockchain experience to being able to have a strong understanding of the technology and being able to build a unique product was a great learning experience.

Learning how to generate the art was difficult, as previously I had very little art experience; but it was a great experience and ended up enjoying it quite a bit.

Building a community for the first time was also a new experience that I wasn't used to; I made a lot of new friends and was glad to have the opportunity to get involved in the Solana + NFT community.

# Accomplishments that we're proud of
Going from zero Solana, rust, and art experience to having a full product built during the span of the hackathon.

# What we learned
How to generate art procedurally, how to use IPFS and Arweave, how to market effectively, the power of a strong community, how to code in Rust, becoming comfortable with bytecode, how to use VPS services, how to calculate rarities for NFTs

# What's next for Bitslimes
I would love to continue working on this project! I would like to add much deeper mechanics to the combat, as it is very simple in its current implementation due to time constraints.

I would love to implement a DAO mechanic where owners of the NFTs are able to vote on what game features/mechanics they want implemented.

Betting mechanics, where two players can make bets on the outcome of their battle.

Evolution, I want to implement a feature where users can evolve their NFTs into a new monster once their Bitslimes monster has reached a certain level.


