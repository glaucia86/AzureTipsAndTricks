(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{440:function(e,t,r){"use strict";r.r(t);var a=r(43),n=Object(a.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/create-vm-accelerated-networking-cli/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Accelerated Networking in Azure"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("This post was brought to you by "),r("strong",[r("a",{attrs:{href:"https://twitter.com/kumarallamraju",target:"_blank",rel:"noopener noreferrer"}},[e._v("Kumar Allamraju"),r("OutboundLink")],1)]),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"what-is-accelerated-networking"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#what-is-accelerated-networking","aria-hidden":"true"}},[e._v("#")]),e._v(" What is Accelerated Networking?")]),e._v(" "),r("p",[e._v("Accelerated Networking provides consistent ultra-low network latency via Azure's in-house programmable hardware and technologies such as SR-IOV. By moving much of Azure's software-defined networking stack off the CPUs and into FPGA-based SmartNICs, compute cycles are reclaimed by end user applications, putting less load on the VM, decreasing jitter and inconsistency in latency.")]),e._v(" "),r("p",[e._v("Please double check the supported operating systems and VM sizes in the following documentation links to check the availability of this feature.")]),e._v(" "),r("p",[e._v("In 3 simple steps, we will learn to enable accelerated networking to an existing VM via Azure CLI. Please make sure Azure CLI is installed in your desktop/laptop. Otherwise use the Azure Cloud shell to execute the following steps.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("First stop/deallocate the VM")]),e._v(" "),r("ul",[r("li",[e._v("az vm deallocate --resource-group myRG --name myVM")])])]),e._v(" "),r("li",[r("p",[e._v("Once stopped, enable Accelerated Networking on the NIC of your VM:")]),e._v(" "),r("ul",[r("li",[e._v("az network nic update --name myNic --resource-group myRG --accelerated-networking true")])])]),e._v(" "),r("li",[r("p",[e._v("Restart your VM. It's that simple, isn't it?")]),e._v(" "),r("ul",[r("li",[e._v("az vm start --resource-group myRG --name myVM")])])]),e._v(" "),r("li",[r("p",[e._v("Confirm the Mellanox VF device is exposed to the VM with the "),r("code",[e._v("lspci")]),e._v(" command. The returned output is similar to the following output:")])])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("0000:00:00.0 Host bridge: Intel Corporation 440BX/ZX/DX - 82443BX/ZX/DX Host bridge (AGP disabled) (rev 03)\n0000:00:07.0 ISA bridge: Intel Corporation 82371AB/EB/MB PIIX4 ISA (rev 01)\n0000:00:07.1 IDE interface: Intel Corporation 82371AB/EB/MB PIIX4 IDE (rev 01)\n0000:00:07.3 Bridge: Intel Corporation 82371AB/EB/MB PIIX4 ACPI (rev 02)\n0000:00:08.0 VGA compatible controller: Microsoft Corporation Hyper-V virtual VGA\n0001:00:02.0 Ethernet controller: Mellanox Technologies MT27500/MT27520 Family [ConnectX-3/ConnectX-3 Pro Virtual Function]\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("ol",{attrs:{start:"5"}},[r("li",[e._v("Check for activity on the VF (virtual function) with the ethtool -S eth0 | grep vf_ command. If you receive output similar to the following sample output, accelerated networking is enabled and working.")])]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("vf_rx_packets: 992956\nvf_rx_bytes: 2749784180\nvf_tx_packets: 2656684\nvf_tx_bytes: 1099443970\nvf_tx_dropped: 0\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br")])]),r("ol",{attrs:{start:"6"}},[r("li",[e._v("To create a VM with accelerated networking from Azure Portal, just check the accelerated networking option in the Networking section of the VM wizard..")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/acceleratednetworking-file1.jpg")}}),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("Most workloads in Azure will probably never find networking to be the bottleneck. However, some workloads are extreme and need to be able to send or receive data at high speeds with reliable streaming and with lower CPU utilization. If that happens to be your use case, then you should consider enabling Accelerated Networking when creating Linux/Windows virtual machines.")]),e._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/create-vm-accelerated-networking-powershell/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a Windows VM with accelerated networking"),r("OutboundLink")],1)])]),e._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/virtual-network/create-vm-accelerated-networking-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Create a Linux VM with accelerated networking"),r("OutboundLink")],1)])])])])},[],!1,null,null,null);t.default=n.exports}}]);