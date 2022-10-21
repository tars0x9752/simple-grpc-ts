{
  description = "A nodejs project template";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

    devshell.url = "github:numtide/devshell";

    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, devshell, ... }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs {
            inherit system;

            overlays = [ devshell.overlay ];
          };
        in
        {
          devShells.default = pkgs.devshell.mkShell {
            devshell = {
              packages =
                with pkgs;
                [
                  nodejs-16_x
                  bun # for dev:run
                  grpc-tools
                ];

              startup.shell-hook.text = ''
                export PATH="$PWD/node_modules/.bin/:$PATH"
              '';

              motd = ''
                {bold}{14}🔨 NodeJS DevShell 🔨{reset}
                $(type -p menu &>/dev/null && menu)
              '';
            };

            commands = [
              {
                name = "dev:init";
                category = "Dev";
                help = "Init project";
                command = ''
                  dev:install
                '';
              }
              {
                name = "dev:install";
                category = "Dev";
                help = "Install npm deps";
                command = ''
                  npm install
                '';
              }
              {
                name = "dev:gen";
                category = "Dev";
                help = "Gen protoc js";
                command = ''
                  PROTO_DEST=./src/proto
                  PROTO_SRC=./proto

                  protoc \
                    --js_out=import_style=commonjs,binary:"$PROTO_DEST" \
                    --grpc_out=grpc_js:"$PROTO_DEST" \
                    --plugin=protoc-gen-grpc=`which grpc_node_plugin` \
                    -I "$PROTO_SRC" \
                    "$PROTO_SRC"/*.proto
                  
                  # generate d.ts codes
                  protoc \
                    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
                    --ts_out=grpc_js:"$PROTO_DEST" \
                    -I "$PROTO_SRC" \
                    "$PROTO_SRC"/*.proto
                '';
              }
              {
                # we use bun here
                name = "dev:run";
                category = "Dev";
                help = "npm run dev";
                command = ''
                  npm run dev
                '';
              }
              {
                name = "dev:build";
                category = "Dev";
                help = "npm run build";
                command = ''
                  npm run build
                '';
              }
              {
                name = "dev:fix";
                category = "Dev";
                help = "npm run fix";
                command = ''
                  npm run fix
                '';
              }
              {
                name = "dev:test";
                category = "Dev";
                help = "npm run test";
                command = ''
                  npm run test
                '';
              }
              {
                name = "dev:reset";
                category = "Dev";
                help = "Remove node_modules then npm install";
                command = ''
                  rimraf node_modules
                  npm install
                '';
              }
            ];
          };
        });
}
