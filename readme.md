# Frontend Master Course Nodejs V2

## Node.js Explanation

Node.js is runtime built on Chrome's V8. Chrome's V8 is the engine that sits inside of Chrome that actually compiles your javascript down to machine code so it can be processed (because javascript actually has to be interpreted and executed on machine).

## Executing Node

### Node REPL (Read, Evaluate, Print, Loop)

REPL is basically an interactive shell that's gonna be in the execution context of the runtime of your choice.

So we'll have an interactive shell inside of our terminal where we can just write some javascript in node runtime, very similar to where you open up the console in the browser.

Type `node` in your shell to bring out the node REPL.

### File Execution

Put your code in a file and execute that file against the node runtime.

Javascript is basically universal, it can be executed in many different runtimes. This is where it's very helpful for you to understand __when your javascript code is gonna be executed__ and __what environment it's gonna be in__ because that's gonna determine what features you have access to and what you're able to do inside of that code.

The same javascript could work differently depending on the environment that you're in.

> Node doesn't have a user interface. Node running in the background on your operating system. There's no CSS, there's no DOM. There's nothing visual about node.js.

## Globals Object Explanation

- `__dirname`: the path to the directory name of the file that got executed.
- `__filename`: the path of the file that got executed.
- `process`: contains all the context you need about the current program being executed. things from env variable, to what machine you're on.
- `exports`, `module`, `require`: these globals are used for creating and exporting modules throughout your app.

## Universal Module Syntax

Universal Module Syntax basically transformed all of your files to be encapsulated in their own closure.

Example:
```javascript
// this basically what a module was
const module = (function() {
  var me = 'hello'
  return {}
}())
```

## Two Types of Modules

### Common Modules (CommonJS)

the syntax (index.js):
```javascript
const action = () => {
  console.log('hello')
}

// with this we can use action function in another file
module.exports = action
```

the syntax (app.js):
```javascript
const action = require('./index')

action()
```

### ECMA Script (ES) Modules

Use `.mjs` extension instead of `.js` extension. Still not sure what is the difference.

the syntax (index.js):
```javascript
export const action = () => {
  console.log('hello')
}
```

the syntax (app.js):
```javascript
// because it's a named export,
// we have to wrap the brackets around it to actually get the name
import { action } from './index'

action()
```

## Internal Modules

The modules that ship with node. So it's kind of globals that shipped with node, but just in a module form that we can import without having to install anything.

### File System module

There's always a sync version for the file system method.

If you don't use the sync version of a file system method, it's going to be asynchronous as in, it's going to be set aside in the event loop to be processed on the next take at some point.

Because it's asynchronous, we're going to accept input throughout this node execution while this thing is processed in the background. And then, node will notify us via callback when it's done.

If you prefer to block the process of node as in, do not move forward, do not process any other code, do not accept any other input until this is done. Then, you would use the sync version.

> When you call `Object.entries()` and pass in an object to it, it's basically gonna return an array of key value pairs, so tuples (it'd be an array of arrays). And each array in the big array is gonna have a key as its first value and a value as a second value.

## Error Handling

Sometimes you don't want the whole app to crash, because there was an error. So, you need some type of way of listening for errors, catching errors, handling errors.

Node.js has some pretty good ways to do that.

### Process exiting

When an exception or an error is thrown in Node.js, the current process will exit with a code of one (`1`).

Example with Node REPL:
- Exit with an exception or error:
```sh
process.exit(1)
```

- Exit with a success:
```sh
process.exit(0)
```

### Catch all errors or exceptions

To catch uncaught errors or exceptions, we can do something like this:
```sh
process.on('uncaughtException', (e) => {
  console.log(e)
})
```

The downside of `uncaughtException` is that, the error already happen so it will crash the whole app rather than continue.

## Create Local Package

We can create a local package by using
```sh
npm init
```

or

```sh
yarn init
```

### Prompt for the local package

1. Package name: If you want to publish these package, you should use a unique name so that there's no conflict with the naming. If you only want to use the package locally, you can use any name you want.

2. Version: The default versioning in here is semantic versioning (semva). Basically it's just three digit system that tells you what the major version is, what minor version is, and what the patch version is.
  - Major: Every time you see a bump in the major version, that's a really big change. That would probably break your app if you upgrade to that.
  - Minor: Fixed some bugs, everything pretty much works the same. Or maybe added something new that doesn't break anything.
  - Patch: Changed some documentation or changed how this thing works but you use it exactly the same.

3. Description: Whatever you put here is gonna show up on registries website like NPM website, hosted on github or yarn, or some internal registry.

4. Entry point: If i were to require or import your module, what file would i be importing? That's the entry point.

5. Test command: What command should we run when someone tries to test this thing.

## Create Reddit CLI

`fetch` in browser doesn't actually return the data, it returns a response object that has status codes, error messages, different things like that. And if we want a data from that, we have to resolve the promise of turning it into JSON, which is permissified so that we can get the data which will be
```javascript
const data = await res.json()
```

## Create Low-level Server

Every time you make a server on your localhost on your machine, you need to put each one on its own port because a port can only be occupied by one server and not many.

If you think about a server, there's typically different paths. So if you ever went to a URL, like some website.com/something and you go to /somewhere-else, it shows you two different things You get two different piece of data, whether it's a website or an API. Those are two different path.

You also have different verbs. So you might have the same path, like /todo, but one might be POST and one might be a GET.

So, you can think of a route on the server as a combination of a path and a verb. And you can have many routes on your server.

### POST

If someone's doing a `POST` request, it means they are trying to send some server a data, we wanna grab that data and we wanna put it somewhere.

> if you don't respond back to the client, your server gonna be hanging as in, it's gonna be stuck in a state of, like i receive a request but i don't know what to do with it and then the connection is gonna be stuck open and the client's gonna be like, "i'm waiting to hear back from you, you haven't gotten back to me yet". And depending on the client, whether it's a browser or whatever, there's a certain timeout limit and eventually it'll just timeout.

> Serverless is something that doesn't stay on but still operates in the server context.

> ORM: Object-Relational Mapping (ref: https://stackoverflow.com/a/1279678)

## Testing

### Unit Tests

Unit tests is basically test like a little chunk of your code, a unit, it could be a little function, it could be some constant variable somewhere, it can be pretty much whatever you define as a unit, but it's basically testing it in isolation and not how it works with something else.

So you won't be testing like how this system works together, how this API call handles everything in the middleware stack all the way down to the response. That wouldn't be a unit test, that would be an end-to-end (e2e) test.

> Middleware about means some process in between the request from client and the response from server. Before the request got to the server, there's some process in the middle to process the request.

#### Test

`--save-dev` is dev dependency which is exactly like a dependency but it's meant to be for development as in, your app does not depend on the dev dependencies being installed for it to operate.

#### Snapshot Testing from Jest

Snapshot testing in UI is basically take a string representation of your UI, so the HTML, the classes, all those things, and it'll just write that to a file with the exact spaces and everything. Everything that's rendered out, it'll write that to a file.

And then when you run it again or write it to a file again, it'll compare the two. If those two strings don't match exactly, then the snapshot failed. That means someone's changed something in its DOM that resulted in the HTML looking different.

## Debugging with Chrome

1. `node --inspect-brk <file>`
2. Open Chrome (not in incognito mode)
3. `chrome://inspect/#devices`
4. Select the `inpect` button at the bottom
5. If it was stopped before reach the debug point, possibly there's an error. If that happen, we can quit Chrome debugger and see the shell that we run the first command.

## Deployment

### Packages

1. Create an account at npm registry or other site registry.
2. Login from CLI with `npm login` command.
4. Change directory to the package you want to publish.
3. Finally use `npm publish` command to publish.

### Servers (On Heroku)

1. Create Heroku account.
2. Install [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli).
3. Add `start` command in `scripts` inside of `package.json` like this:
```json
"scripts": {
  "start": "node ./path/to/server.mjs"
}
```
4. Add what version of Node.js that we're using like this:
```json
"engines": {
  "node": "v16.11.1"
}
```

## Q&A

- If i am using CommonJS in a project, could i gradually switch over to ModuleJS?

> Yes, but it's not as simple as just going in and changing everything to mjs. You have to figure out the right module syntax to interact between the different dependencies that you have across files. And depending on how many files you have, that can be very tedious. But there is a path there, it's just not automatic.

- What is `await`?

> `await` is for when we need to wait a certain process to finish before moving on to the next process.<br>
> If we exclude `await` that means when javascript looks at the file, it’s going to initiate the function but it’s not going to wait around until the function finished. It’s going to task it to happen later in the background. And it’s gonna continue to move on.<br>
> `await` was supposed to feel synchronous.

- When should we use `async`?

> New feature in the latest version of node (at least in version 14.17.0 or above), you don’t need to add `async` if it is in the top level like this:
> ```javascript
> let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')
> ```
>
> But if you do have a function like this:
> ```javascript
> const getUsers = () => {
>     await db.getUsers()
> }
> ```
> That won’t work because you need to put `async` keyword before your parameters on that function like this:
> ```javascript
> const getUsers = async () => {
>     await db.getUsers()
> }
> ```
> didn't go into details why tho.

- How are we able to use the process without importing it?

> Because process is an actual global variable inside of Node.js just like the keyword import, module, etc.

- What is the difference between an error and an exception?

> The only difference is that an error can cause an exception. So if you have an error, as in some discrepancy, some miscommunication in your app, you throw the error that raises an exception.<br>
> So the error alone is just an object. It's just an object about some metadata like here's a line of code, here's where it broke, here's what happened, the type of error. Nothing happens until you actually throw that error, which causes an exception built into javascript.
>
> You can think of an exception is like an error that escalated to the highest level.<br>
> It's like getting a customer service and speaking to a manager, that's an exception.<br>
> Where's the errors you just calling and complaining in the first place.

- Is `await` blocking a thread? And if so, why are we using it versus just using synchronous?

> `await` gives you the illussion that is blocking a thread, it should feel like synchronous code, it should feel like it is blocking and nothing else is happening.<br>
> But, that's not actually what's happening. If you were to look at what `await` gets transpiled into, it actually gets turned into what's called a generator, you can think a generator like a async for loop basically.<br>
> So it's the equivalent as if you basically put the code that comes after the async `await` inside of a `.done()` callback or inside of a callback of asynchronous function.<br>
> It's the same thing functionally but it looks like it's blocking because async `await` was really only created to solve a visual problem.<br>
>
> Callbacks already solved the functional problem of like, I want this code to run after some asynchronous thing. Promises was an attempt to make it visually better instead of having all these nested callbacks.<br>
> But it was still wasn't top to bottom because you can put something after the `.then()` and that was still executed first before the previous `.then()`. So it was still not solving that problem for people understanding to read from top to bottom, like other languages that are blocking, that have threads like python or something like that.<br>
> So, async `await` was created to solve the visual problem of, okay you're just gonna read it from top to bottom, but it's still gonna work like callbacks, it's still gonna work in the background, in event loop. It's just this code has been added to the callback.

- Can we specify additional parameters to commands inside the scripts?

> Yes, we can. It's very limited tho, like we can't use flags with it.<br>
>
> For example:
> ```json
> "scripts": {
>   "rm": "rm"
> }
> ```
> then we won't be able to use `-r` flags to remove directory. we need to use something like this:
> ```json
> "scripts": {
>   "rm": "rm directory --"
> }
> ```
> then we can use the `-r` flags, but we can't use parameters or arguments.
>
> the course recommend to create a script file and run those script file instead of directly running the command.

- If you have an object and it logs, object objects, how do you see that?

> At some point the logging mechanism in node is like, okay you're just going really deep on all these objects, so we're just not gonna log all of them, we're just gonna paraphrase for you.<br>
> And that's basically what's happenning, when you have like a certain level of hierarchy of data, Node.js tries to simplify the output of your logs by just paraphrasing the object.
>
> Sometimes you want to see it, so how do you get around it. Well there's two options:
> - You just log a little closer. Example:
> ```javascript
> const 0 = {
>   u: {
>     l: { course: 'node.js', a: { b: {} }}
>   }
> }
>
> // instead of this
> console.log(o)
>
> // we can do this
> console.log(o.u.l)
> ```
> - You can use `JSON.stringify()`. Example:
> ```javascript
> const 0 = {
>   u: {
>     l: { course: 'node.js', a: { b: {} }}
>   }
> }
>
> // instead of this
> console.log(o)
>
> // we can do this
> // 2 in the line below was for indentation
> console.log(JSON.stringify(o, null, 2))
> ```

## References

- [Web version of course](https://intro-to-nodejs-v2-site.vercel.app/lesson/00-welcome)
- [Node.js globals object documentation](https://nodejs.org/api/globals.html)
- [What is Callbacks](https://www.tutorialspoint.com/nodejs/nodejs_callbacks_concept.htm)
- [Yarn equivalent command to npm](https://code.luasoftware.com/tutorials/yarn/yarn-and-npm-equivalent-command/)
