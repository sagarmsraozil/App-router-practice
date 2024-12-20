const fetchFunc = async () => {
  return await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Checking");
    }, 2000)
  );
};

const Demo = async () => {
  await fetchFunc();

  return <p>Sagar</p>;
};

export default Demo;
