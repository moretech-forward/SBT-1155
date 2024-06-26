import hre from "hardhat";

// npx hardhat run scripts/deploy.s.ts --network localhost

async function main() {
  const SBT = await hre.ethers.getContractFactory("Soulbound");
  const sbt = await SBT.deploy("test", "test");

  //https://ipfs.io/ipfs/QmaNMk641puZy1uth85UCM4MZiXB9qUyuverkBo5bPu35n

  await sbt.setURI(
    "0",
    "https://ipfs.io/ipfs/QmaNMk641puZy1uth85UCM4MZiXB9qUyuverkBo5bPu35n"
  );

  await sbt.setURI(
    "1",
    "https://ipfs.io/ipfs/QmaNMk641puZy1uth85UCM4MZiXB9qUyuverkBo5bPu35n"
  );

  await sbt.setURI(
    "3",
    "https://ipfs.io/ipfs/QmaNMk641puZy1uth85UCM4MZiXB9qUyuverkBo5bPu35n"
  );

  await sbt.setURI(
    "4",
    "https://ipfs.io/ipfs/QmaNMk641puZy1uth85UCM4MZiXB9qUyuverkBo5bPu35n"
  );

  await sbt.setURI(
    "5",
    "https://ipfs.io/ipfs/QmaNMk641puZy1uth85UCM4MZiXB9qUyuverkBo5bPu35n"
  );

  await sbt.mint("0x4eb6EBcfA62792A01E5005c453F39D63493a79B8", "0", "1");
  await sbt.mint("0x3128ef7F0933cF2bA18f1Ef7280A7b684347B115", "0", "1");

  await sbt.mint("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", "1", "100");
  await sbt.mint("0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266", "1", "432");

  console.log(`Soulbound deployed to ${sbt.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
