# rinto [![Build Status](https://travis-ci.org/stratospire/rinto.svg?branch=master)](https://travis-ci.org/stratospire/rinto) ![version](https://img.shields.io/github/release/stratospire/rinto.svg) [![license](https://img.shields.io/github/license/stratospire/rinto.svg)](LICENSE)


> portable github hosted project templates. less assembly required

Rinto is a command line tool for sharing and applying reusable project
templates that remove tedious assembly boilerplate, allowing you to spend less
time in the bikeshed and more time on the road.

## Goals

* 0 runtime dependencies
* use existing and familiar tools: handlebars, github
* use environment for configuration
* fast
* focused feature set
* fun

## Installation

### homebrew (on osx)

```bash
$ brew install stratospire/tools/rinto
```

If you want to upgrade to newer versions, use `brew upgrade`

```bash
$ brew upgrade stratospire/tools/rinto
```

### github releases

You can get up and going by downloading a binary directly from [github releases](https://github.com/stratospire/rinto/releases).

```bash
$ cd $HOME/bin
$ curl -#L "https://github.com/stratospire/rinto/releases/download/v0.1.5/rinto-$(uname -s)-$(uname -m).tar.gz" \
  | tar -xz -C ~/bin
$ rinto --help
rinto 0.1.5
portable git hosted project templates

USAGE:
    rinto [FLAGS] [OPTIONS] <repository> [<target>]

FLAGS:
    -h, --help       Prints help information
    -k, --keep       disables replacement prompts and keeps local copies of files
    -V, --version    Prints version information
    -y, --yes        disables value prompts by accepting all default values

OPTIONS:
    -b, --base <base_directory>    directory within <repository> to use as root. defaults to base of repo
    -r, --rev <revision>           git revision to checkout. defaults to 'master'

ARGS:
    <repository>    uri of template to apply.
                    example uris
                    github: user/repo
                     local: file:///path/to/repo
                       git: git@github.com:user/repo.git
    <target>        directory to write template output to. defaults to current working directory
```

## assumptions

Rinto templates follow two simple conventions.

1) Rinto follows the [12-factor philosophy](http://12factor.net/config) for how to configure your templates.
Rinto assumes a file at the root of a directory called `default.env` exists, containing
key value pairs that represent your templates environment variables. When applying a template,
this file will be read and the user will be prompted for each key that isn't defined in their
current environment. This works well on most systems and allows for promptless template execution
as you can specify and environment before running the program

```bash
$ FOO=bar BAR=baz rinto user/repo target
```

2) Rinto assumes a directory exists called `template` in your template's
root directory, next to your `default.env` file. This directory will contain arbitrary
handlebars template files representing the your templatized project. Rinto will walk
through this directory evaluating templates and copying results to your target directory.
If Rinto detects the presence of a local file will differences for a given file, you will be
prompted for whether or not you wish to keep those local changes.

## template hosting

Just upload your templates to [github](https://github.com/). That's it.

![](github.png)

## Usage

### Creating templates

Rinto defines a convention for writing templates with only two rules.

1) create file at the root of a directory called `default.env` which stores
line-oriented key value pairs

```bash
$ touch default.env
$ echo "FOO=bar" > default.env
```

2) create a directory called `template` under which you define a set of handlebars templates

Rinto supports the notion of rendering templates from file content as well as file paths
so you can also templatize the location of your template files. See [stratospire/mit](https://github.com/stratospire/mit) for an example.

```bash
$ mkdir  template
$ echo "Hello {{FOO}}" > template/hello
```

Publishing a Rinto template is as simple has storing this work in a git repo.
To share these templates with others you can simply push this repo to github.

### Applying templates

[Install](#Installation) the rinto binary and ensure it's on your execution path.

rinto requires one and optionally a second argument.

The first argument is a reference to a template. The simplest case is using a
github user/repo. By default rinto will render this template in the current
working directory


```bash
$ rinto user/repo
```

If this is undesirable, you can provide a path to render into

```bash
$ rinto user/repo target_path
```

rinto will clone this template repo and read the defined template
variables from the default.env file. If any of these variables are not defined
in your env, rinto will prompt you for a value falling back on a default
if you do not provide one.

Finally rinto will apply that data to the handlebars templates and write
all files to the target path.


### Composing and collision detection

Rinto is designed in a way that let's you compose project templates. What does that mean?
Most tools will blow away a target directly when applying templates. Rinto will not.
Instead if will detect changes if a template was previously applied and prompt you before
writing the new version. Rinto also allows you to "overlay" different independent
 templates within a project structure which allows you to compose your project templates to
 avoid the one size fits all problem of duplicate but similar templates in the wild.

## Areas of contribution

### handlebars helpers

The choice of handlebars allows for template level "helpers". Currently only a minimal set
of helpers beyond the built-ins are provided. As a refresher handlebars helper syntax will look something like the example below.


```hbs
{{ upper foo }} {{ lower bar }}
```

The table below lists the transformation helpers by name and expected inputs and outputs

| helper     | example in | example out |
|------------|------------|-------------|
| upper      | foobar     | FOOBAR     |
| lower      | FOOBAR     | foobar      |
| capitalize | foobar     | Foobar      |
| camel      | foo_bar    | fooBar      |
| snake      | fooBar     | foo_bar     |
| dashed     | foo_bar    | foo-bar     |

It is sometimes useful to conditionally render something based on equality
context data. To support this you may use the `eq` helper.

```hbs
{{#eq foo "bar"}}
Hello equality
{{else}}
Hello alternative
{{/eq}}
```


More are planned in the future, but I plan to let demand drive additions.

### Ideas!

I'd like to hear about your ideas and use cases. It would be useful to assemble a directory
of known templates. The choice of git(hub) for hosting templates keeps these
decentralized which is good but hinders discovery of existing templates.

## Alternatives

### [giter8](https://github.com/foundweekends/giter8)

This project is heavily influenced by giter8. rinto aims to solve some of
the issues I've experienced with it. giter8 is a jvm-based cli. To use it, you
first need to install another tool called conscript, which itself requires dependencies
on the underlying engine of sbt ( the scala build tool ), and before that you need to install
a modern version of java's JRE (not to be confused with JDK!).
The sum total of this can be hundreds of megabytes you have to download over
the internet before your users can get going.

rinto comes with a single standalone static binary, weighing in at about, 4M.

giter8 uses a templating language many are not familiar with, but can get acclimated to,
author templates. rinto uses [handlebars templates](http://handlebarsjs.com/) for templating
in order to be familiar to a larger audience.

giter8 templates are just git repositories. rinto templates are as well.

giter8 defines a similar set of conventions. You store your templates defaults in a java
properties file called default.properties and template source under a mvn-style src/main/g8 directory.

rinto opts to read configuration from the environment and, as such, uses a default.env file.
rinto ties to steer away from java's mvn conventions for a simpler directory structure, a "template" folder

## [yeoman](http://yeoman.io/)

Yeomon is a similar tool that is more focused on providing a scaffolding for template
authors to write node.js modules that serve as generators to generate project boilerpate.

rinto focuses on a more general audience. To author templates,
the only required knowledge is handlebars. Yeomon requires
you to install the node runtime and also setup and account on npm to share your
work. rinto only requires git repositories. For convenience, to facilitate
sharing on github, it provides convenience for referencing github user repositories (rinto user/repo).

Yeomon's focus and/or marketing targets front end web development. rinto generalizes
the problem of templating away boilerplate for any time of project.
