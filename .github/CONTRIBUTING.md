# How to contribute

I'm really glad you're reading this, because we need volunteer developers to help this project come to fruition.

## Testing

Although I do not like to write any tests, tests is really useful. We are using [Electron](//electronjs.org), but its test framework [Spectron](https://github.com/electron-userland/spectron) will deprecated. We can only use Chrome Driver. I do not like it, so I do not use it.

Certainly, if you writed some tests for this subject, and you send your GitHub Pull Request to us, we will be very happy.

## Submitting changes

Please send a GitHub Pull Request to us with a clear list of what you've done (read more about pull requests). The checklist should list at least the following:

- What do Issues/features you resolved/added
- Does you code use any third-party packages?  (True | False)

Always write a clear log message for your commits. 

Add features's commits message should look like this:

```shell
$ git commit -m "Add: Component Settings"
```

Delete features commits message should look like this:

```shell
$ git commit -m "Remove: Delete Settings"
```

Update features commits message should look like this:

```shell
$ git commit -m "Edit: Update Settings"
```

## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

    We indent using 4 spaces (a tab)
    Using new JavaScript features.
    This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
    For packages Manger, please use yarn.(not npm!)
    Run 'yarn beautify' before commit.
    For the CDN, always use cwd-relative paths rather than root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif').

Thanks, Adkinsm, Uazira Inc
