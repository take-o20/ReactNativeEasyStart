# Description

I made this repository for making easier common forms of apps.  
Feel free to create your own apps based on this repository.
So if you want to see it as a sample, please skip steps 1 and 2 below.

warning:  
This project include 'react-native-firebase' etc. So you need other set up if you want to use.  
Also I don't confirm Android Project works. I confirm only iOS Project.
Please change 'CFBundleIdentifier' on Xcode.

# First, Change your repository

```
git init
git add .
git commit -m "first commit" // if message isn't showd, you should "rm -rf .git" instead of "git init"
git branch -M main
git remote add origin git@github.com:whoareyou/yourProject.git
//fatal: remote origin already exists. -> git remote rm origin
git push -u origin main
```

# Second, change your project name

I recommend to use https://github.com/junedomingo/react-native-rename#readme

```
npx react-native-rename your-own-repository
```

# Third, install

I recommend to use better 'yarn' than 'npm'.  
Because "react-native-firebase" module doesn't install right with 'npm'.

```
yarn
cd ios
pod install
```

# Fourth, build your app

You should use command line first, because 'main.jsbundle does not exist. ' error may happen on Xcode.

```
npx react-native run-ios
```

# This project is based on my app. If you like download my app!!

https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1534564015
