import { defineConfig, globalIgnores} from "eslint/config";

export default defineConfig([
  globalIgnores(["**/*.json", "**/*.angular"]),
  {
    plugins: {
      files: ["**/*.json", "**/*.angular"],
      ignores: ["**/*.json", "**/*.angular"],
      rules: {

      }
    }
  }
])