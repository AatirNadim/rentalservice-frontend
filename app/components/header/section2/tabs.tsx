import React from "react";
import { Tabs, TabsList, TabsTrigger } from "../../ui/tabs";

const TabSection = () => {
  return (
    <Tabs defaultValue="blogs" className="w-[441px]">
      <TabsList className="bg-transparent">
        <TabsTrigger value="blogs">Blogs</TabsTrigger>
        <TabsTrigger value="become-partner">Become a partner</TabsTrigger>
        <TabsTrigger value="platform-teams">Platform Teams</TabsTrigger>
        <TabsTrigger value="faqs">FAQs</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default TabSection;
