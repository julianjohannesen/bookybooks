The following document was adapted from CodeBuddies.org's excellent CONTRIBUTING.md file.

# Table of Contents
1. [Quick Steps on Contributing](#the-quick-steps-on-contributing)
2. [More Detailed Steps on Contributing](#the-more-detailed-steps-on-contributing)
3. [Common Questions](#common-questions)
  1. [How do I start up the app?](#how-do-i-start-up-the-app)
  2. [I've picked out an issue I want to work on and left a comment on the issue to tell everyone that I'm working on it. Now what?](#ive-picked-out-an-issue-i-want-to-work-on-and-left-a-comment-on-the-issue-to-tell-everyone-that-im-working-on-it-now-what)
  3. [What should I remember while I'm working on my branch?](#what-should-i-remember-while-im-working-on-my-branch)
  4. [How do I stage master/deploy?](#how-do-i-stage-masterdeploy)
  4. [What do I do when I'm ready to merge my fix or feature back into the main app?](#what-do-i-do-when-im-ready-to-merge-my-fix-or-feature-back-into-the-main-app)
  5. [What are merge conflicts, and how do I resolve them?](#what-are-merge-conflicts-and-how-do-i-resolve-them)
  6. [How do I add myself as a contributor?](#how-do-i-add-myself-as-a-contributor)
  
4. [Helpful Reminders](#helpful-reminders)
5. [Editorconfig](#editorconfig)
6. [Contributors](#contributors)


# The Quick Steps on Contributing:

1. Install your development environment.
2. Create a branch on the issue you want to work on.
3. Submit a Pull Request and associate it with the issue.
4. (Optional) Add yourself as a contributor to the end of this document.  


# The More Detailed Steps on Contributing:

1. Please star this repository, so that others can hear about what we're doing!]

2. Fork this repository! Once you have a copy of this repo on your own account, clone this repo to your computer by typing something like the following command in the terminal (I'm assuming you're using GitHub here):

  `git clone https://github.com/[YOUR_ACCOUNT_NAME]/bookybooks.git`

  (Replace the URL with your own repository URL path.)

3. Run `cd bookybooks`. Then, set up this repository as an upstream branch using:
  * `git remote add upstream https://github.com/julianjohannesen/bookybooks.git`

  To sync with the upstream repository, do the following:
  * `git fetch upstream`
  * `git checkout staging`
  * `git merge upstream/staging`

  Note: You can type `git remote -v` to check which repositories your `origin` and `upstream` are pointing to.

4. Type `npm install` to install the initial packages (you only have to do this once!).

5. Then, run `npm start` in your terminal to start up the app in your browser ([http://localhost:3000](http://localhost:3000)).

6.Look at some of the [open issues](https://github.com/julianjohannesen/bookybooks/issues) and identify one that sparks your interest.

If you want to work on the issue, leave a comment on it saying that you're working on it!

Then, create a new branch by typing `git checkout -b BRANCHNAME`. Replace BRANCHNAME with what you want to name the branch. Conventionally, you should use the issue number in your branch name. For example, if you decided to work on issue https://github.com/julianjohannesen/bookybooks/issues/6, you should type `git checkout -b issue-6` to create a branch named `issue-6`.

9. If you have any questions about the issue you're looking at, you can leave a comment. Read below for more instructions about how to work with branches.

10. Type `git branch -a` to see a list of all the branches besides `staging`, the default branch you're in. Note that if you want to switch to an already-created branch, you would type `git checkout BRANCHNAME`. You can read more about how to create a new branch to work on an issue below.

11. Once you finish making your changes, commit and push your changes.

12. Submit your Pull Request! See some tips on [how to create the perfect pull request](https://github.com/blog/1943-how-to-write-the-perfect-pull-request).

13. (Optional) Add yourself as a contributor, if you haven't done so already. Steps are listed [below](#how-do-i-add-myself-as-a-contributor).

If you see a bug in the app or have a feature request, feel free to [create a new issue](https://github.com/julianjohannesen/bookybooks/issues/new) on the Github repo!


# Common Questions
### How do I start up the app?
* `npm start`

If you have any problems getting the app to start, feel free to shoot me a quick [email](julian.johannesen@gmail.com)

### I've picked out an issue I want to work on and left a comment on the issue to tell everyone that I'm working on it. Now what?
- To work on a new feature, leave a comment on the issue saying that you're working on it. Then, you need to *create* a new branch for the issue. You can do it by typing:

  `git checkout -b NAME_OF_NEW_BRANCH`

  For example,

    `git checkout -b fix/issue-6-limit-140-characters`

  Please remember to include the issue number in the name of the branch.

How you name your branch doesn't really matter as long as you put the issue number in there, so that other people can figure out what you're working on. Putting the number of the issue in your branch name helps prevent duplicate branches.

All right. After we've created our branch, the next step is to push our new branch to the repo by typing:

  `git push origin NAME_OF_NEW_BRANCH`

Now we can make commits to our branch (`git commit -am "commit message"`) and `git pull` to get other people's changes to the branch, and `git push` our own commits to the branch.

Finally, when you're finished working on the fix or feature in your branch, you'll need to submit a pull request!

Click on the "pull request" button by going to https://github.com/julianjohannesen/bookybooks/pulls and clicking on "new pull request." Next, select your branch, and submit.

One of the github maintainers (@julian or someone else) will look over your pull request and accept it after it is reviewed by volunteer contributors. Note that for best practice, the PR [may get "squashed" into one commit](http://softwareengineering.stackexchange.com/questions/263164/why-squash-git-commits-for-pull-requests). If you prefer that the merge not be squashed into one commit, just let me know in the PR!

*Note 1* - If you're working on an issue over several days, please leave a comment every couple of days letting me know that you're working on it. In case you're unable to continue on the issue for some reason, just let me know that as well so that someone else can claim it. If you do not update within a week, it will be assumed that the issue is not being attended to and will be up for grabs.

*Note 2* - "Thou shalt not hijack a 'claimed' issue so long as the person who's claimed it has commented otherwise or one of the maintainers has added the unclaimed label onto it."

### What should I remember while I'm working on my branch?
- As you're working, it's always a good idea to check which branch you're in by typing `git branch`. When you first `git clone` the repo, you'll only see a single branch, but you can discover other branches by typing `git branch -a`.

- While you're working, you should try to merge in the latest from `master` occasionally while you are in your branch. You can do this by typing:

  * `git checkout staging`
  * `git pull`
  * `git checkout BRANCH_NAME`
  * `git merge master`

### How does the deployment process work?
The staging site is located at [staging.fillthisin.com](http://staging.fillthisin.com/). Pull requests that are approved are  merged into the `staging` branch and automatically deployed to the staging site.

When we're ready to do a release, we'll merge the `staging` branch into the `master` branch via a pull request, Codeship will run, and we'll automatically see the changes live at [fillthisin.com](http://fillthisin.com)

### What do I do when I'm ready to merge my fix or feature back into the main app?
When you are ready, submit a PR on GitHub, and someone will review it.

If you have recently pushed a commit, you should see 'create a pull request' on the master repo. If you do not see it, GitHub provides [documentation on how to create a PR](https://help.github.com/articles/creating-a-pull-request/).

### What are merge conflicts, and how do I resolve them?
Merge conflicts come up when there is a conflict between code that you've written and code that other people have `git push`ed into your branch.

Conflicts might also come up when you type `git merge staging` to merge in the changes from staging into your branch.

If you see a conflict, don't panic!

If you are unfamiliar with how to resolve a merge conflict in git, you should read this: [https://githowto.com/resolving_conflicts](https://githowto.com/resolving_conflicts).

In summary, the steps are:

1. open up the file(s) with the conflict.
2. Be sure to remove all traces of `>>>>>` , `======`, and `<<<<<<` from the file.
3. Save the file after you've cleared up the conflict.
4. `git add [filename]`.
5. `git commit -m "message" [filename]`.
6. You're done! Now you can continue to `git push` and `git pull` and `git merge staging` while you're inside your branch.

### How do I add myself as a contributor?
First of all, thank you! Then add you name at the bottom of this file.

### Helpful Reminders:
1. Remember, you can always check which branch you are in by typing `git branch` or `git branch -a` to see all the branches that exist.

2. Remember to `git pull` occasionally to get the new commits and branches others have pushed up.

3. To minimize large messes of merge conflicts, you can `git merge master` occasionally if you're working inside a branch that you intend to merge back into `master`. Make sure you're in this branch when you type `git merge master`.

4. Type `npm start` to run this app. Your terminal will tell you to open up a new browser window at [http://localhost:3000](http://localhost:3000).

5. Remember to leave a comment on the issue if you decide to start working on an issue, so that others know.

### Editorconfig
Because everyone has their own preferred development tools, this project has an `.editorconfig` file in its root to help maintain code  consistency.  Please [download the appropriate plugin](http://editorconfig.org/#download) for your text editor or IDE - this will help to  ensure that your editor uses the rules configured in the `.editorconfig` file.

### Contributors
An alphabetical listing of our contirbutors.