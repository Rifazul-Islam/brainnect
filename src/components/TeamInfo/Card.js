import Image from "next/image";

const Card = ({ teamInfo }) => {
  const { profile, name, position, email, number } = teamInfo;
  //   console.log(teamInfo);
  return (
    <div className="card  bg-base-100 shadow-xl border-2 pl-3 p-2 pt-4 ">
      <div className=" flex items-center gap-4">
        <Image
          className="w-12 h-12 rounded-full "
          src={profile}
          width={300}
          height={50}
          alt=""
        />
        <div>
          <h2 className="font-bold text-[19px]"> {name}</h2>
          <h3 className="font-semibold"> {position} </h3>
        </div>
      </div>
      <p className="border my-7"></p>

      {/* two pard work */}
      <div>
        <div className="flex items-center gap-3">
          <Image
            className=" h-[20px] w-[20px]"
            src="https://s3-alpha-sig.figma.com/img/ec80/8a20/b35c22dee168cbfbc82f2e80c1c4e909?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NYKCmy2JWwm6ra1Ln8QWXABaY7Q3rbpYSmp1ImkqD4FOyBa--wwgOcNyLBw-RHJJ1PXVLaYjoHqBy~2cm8vU~8Y08KaRW~h6zQgviACAGmSW2QetcCrsNCSTHIlGx1YcPVTp-tiMR-GCLrG8B49zjxYZ9ZMyKCRl-kl1ICfzNOQ5NZ0xfcwj7cAYa5s8eVWXyWb-YVMU2UIlknGFCntijajjKaMc~XMno8xG8GfnxIB6Le9ONhqD0L8qfvGym4~chaAorLIKILlpGpskvfC-RSJaroFm2F-4Csor4~81Nhvkgh8GqLSx3hq-5axJO8fTdIwCHmPsmT4OrpakyfGztQ__"
            width={300}
            height={50}
            alt=""
          />
          <p className=" text-black font-medium"> {email} </p>
        </div>
        <div className="flex items-center gap-3 my-3">
          <Image
            className=" h-[20px] w-[20px]"
            src="https://s3-alpha-sig.figma.com/img/a085/cdac/da8f62ba791bef3be4dd3d2ef19d2e9e?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C8YODFRZU-JM~3aHDBXYe6QwnvEVi1P4yMb6nCQCED0zt9e5cAvDXzpCUB6iKExVGZc6aH~xEKXMslSry4RNv14s06s~snCVtIXtscdKnVWOb6DmqLoCVLsHwfFS82cFq4u9J4TnB9waw4KHGGu~1XwLf42iOYtYWg72jfrUNQUXsgCaiu5OfwA2D5phDRx~QYe6TI88N6LMz~2UbQZu0Rs-6t~IFn~2cAJ1Ma7tcSFthUbp4rzaSy1cOfVZFMNiH5t~ctC4H78nLeVIvw4AKVr2717gCiPwsDjm7d9EjEoRb3aVFOJeLT3B~OOzJl~IQppYS8gvwAxyVT~qFQw18A__"
            width={300}
            height={50}
            alt=""
          />
          <p className=" text-black font-medium"> +880 {number} </p>
        </div>
      </div>

      {/* three part work */}

      <div className="flex gap-4 my-2">
        <div className="bg-[#fff] border-2 shadow-lg  h-[42px] w-[42px] flex items-center justify-center rounded-lg">
          <Image
            className="h-[30px] w-[30px] cursor-pointer"
            src="https://s3-alpha-sig.figma.com/img/f3ec/45e6/3fff1ba1a6e0f721c0a8b269cca5c099?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kk180v0al3Tm6KEVbHAmqYjQSaNmxLMRki0eX5yBzC-ipf5o9aJGXqy2LQNFCK1xi2rdOzWBXTrKFhizmHuXgwou7HObrH60hrTkV1UhLeKhzwQgSJgwYdyIHdotgV~-RKt-jZCyVfsL6GuGq6T5Nk3zzVi88vXYFTakdlmxuU2xbl-Jxd~Ehqv8PBefcivv4lbgldVPtWTfZpS8815kbihEEH5aNKpOdN2ZDkVYO6AJHd7jzOYyZUyNspOIbLPw6a~bV1Wqqyyv1dmkvUqRFx7SHfH6ZsbwWxnnlj9CpShklSEINTQfQ79ZcPTxvOsRfO~qfO-FAs6MiKZKskPTEA__"
            width={300}
            height={50}
            alt=""
          />
        </div>

        <div className="bg-[#fff] border-2 shadow-lg  h-[42px] w-[42px] flex items-center justify-center rounded-lg">
          <Image
            className="h-[30px] w-[30px] cursor-pointer"
            src="https://s3-alpha-sig.figma.com/img/5bde/8c42/64aa000ddee4e8fbfe873d44b0a7b7e9?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a0jdWrN0Wy2yS5b~TKdAHh~PhdGT49zgSr5FItCT1INuag1LEsYoX3-hNv5WVwfKZElG5xcLq9J4kcU--SaOWSFW-E~1GZ2Kpq8Cn3eY3w7r6wtiB1qFwUfkTdJf2qAnGkwXBy1O9ixLKbva8LX0BiF-SJLEb823TsIGhZxu7jlDZIFGtx-F0pRPETfyIlLTl2OqW5pzB3P8l7etJdGAWEI9AdHmw7ZZyNcaH9H0ncdKqhx3mBkylV3PV1-NL5PzZCSW8KUWK-cBXiNwDUwj16Rm2lqTWr9jnFwJvfuStS9PyFczBEUwRY-gi4rArywjEEepgYVVr~fZId3TAs03pA__"
            width={300}
            height={50}
            alt=""
          />
        </div>

        <div className="bg-[#fff] border-2 shadow-lg  h-[42px] w-[42px] flex items-center justify-center rounded-lg">
          <Image
            className="h-[30px] w-[30px] cursor-pointer"
            src="https://s3-alpha-sig.figma.com/img/0585/ad00/b146b99300e61aa95f0a182d2b4d125a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BbrnymxtnrDZyu~pQR8x0UWF~NadOVreXMRgxtDbY7Wk2X-YGXQ3q~uohjepHSn56d2ZyNWJgcItoEMXRGCjHttKDYOxVhZ8s8aFIPN1d3YbY9NP1VqlM-~WCJdKn09EJvDT266DXNZR6zOIIbe-uKlr~-e8AoJ5h~GutdPIK3vhfockazZUj3fz1jn72yONOhqZEmC46F~hxm6RfoFcs2a1cAX-O5ARJ8GC~vVSZOhE6Y0tllBspu3mVhQWqr2AGOMnYCq5rQHNmxof-~ByB2wSMvkFpRyAvhgs9xv88YHcr5Iv1W~bt2cadEHqEFTNa8vuskm8VoWVE4-DpJmZuA__"
            width={300}
            height={50}
            alt=""
          />
        </div>

        <div className="bg-[#fff] border-2 shadow-lg  h-[42px] w-[42px] flex items-center justify-center rounded-lg">
          <Image
            className="h-[30px] w-[30px] cursor-pointer"
            src="https://s3-alpha-sig.figma.com/img/82fb/dc45/e2b88cb9c43171f6111c225c45041feb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p-OMz~sseu2F4XpvZu3-KTMOsMIV1RednwegQbfaJm8N-qI5ek9gjZ4S0nxbkVPHozvdNRK1nC17CbQdBqZrWCP3j3INgbg~5wxBBD45D8iYzWDO3XzxnkAUlCf4UcA7RsbRwFY39CrH65FbA97QxE1Q2betGO932BydmJiYjLXkl4noRxItrJ7Tw6vS4DxQmVD2cKB8fATA0dOP9UeOaCZqCg-Y0ulDjeHaKVMLyOst39dpJqj3zWVpPhImK0ktRvBEBQqaLhN6UkVv1BCGMaF6Pi~MPGcl1GZsBhRygqCG1UkxKq6Wc1uQ~Bgo66bcofow-JAosBKYGycHGjAUkA__"
            width={300}
            height={50}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
