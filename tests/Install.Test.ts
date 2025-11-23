// Copyright (c) 2025 EFramework Innovation. All rights reserved.
// Use of this source code is governed by a MIT-style
// license that can be found in the LICENSE file.

import { XEnv, XFile, XTest } from "io.eframework.unite.utility"
import { Install } from "../src/utility/Install"

XTest.Test("Install Toolchains", async () => {
    XFile.DeleteDirectory(XEnv.LocalPath)
    await Install.Process(["--protoc=30.2", "--gitproxy=https://ghproxy.net/"])

    XFile.DeleteDirectory(XEnv.LocalPath)
    await Install.Process(["--all"])
})