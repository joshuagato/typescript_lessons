// Typescript compiler watch mode => tsc app.ts -w || tsc app.ts --watch

/*
    Compiling the entire project
    ----------------------------
    1. tsc --init => creates a 'tsconfig.json' file
    2. tsc || tsc -w || tsc --watch

 */

/*

    In tsconfig.json, you can add

    "exclude": [
        "analytics.ts",
        "*.dev.ts",      //this excludes all file names the end with .dev.ts
        "**|*.dev.ts",      // should be / instead of |: any such file in any folder
        "node_modules"      //redundant since the compiler already considers that
    ],
    "include": [
        "", ""
    ],  // any file which is not included here will not be compiled

    "files": [
        "app.ts"
    ]   // similar to 'includes' but here you can't specify folders
*/


/*
    sourceMap => turning on this option make the readable typescript files available in browser source tab
*/

/*
    outDir => setting a folder for this option directs/stores all the output files to/in that directory/folder
    rootDir => the root folder that the compiler should look in for ts file that need to be compiled
    removeComments => when turned on removes comments from the compiled files
    noEmit => when turned on the compiler only checks your ts files for correctness, but not compile them to js files
    noEmitOnError => not in the 'tsconfig.json' by default. when on does not convert ts files to js if erroneous

*/
