"use client";

import CarSVG from "@/app/components/assets/car";
import Moped from "@/app/components/assets/moped";
import { Button } from "@/app/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";
import { cn } from "@/lib/utils";
import { z } from "zod";
import React from "react";
import { useForm } from "react-hook-form";

enum TabsValue {
  BIKE = "bike",
  CAR = "car",
}

const formSchema = z.object({
  vendorSubTypeIds: z.number().array().nonempty("Please select a service type"),
  description: z.string().min(1, "Please enter a description"),
});

type formType = z.infer<typeof formSchema>;
const form = useForm<formType>({
  resolver: zodResolver(formSchema),
  defaultValues: {
    description: "",
  },
});

const FormComponent = () => {
  const [activeTab, setActiveTab] = React.useState<TabsValue>(TabsValue.BIKE);
  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-6 p-4 md:p-8 lg:p-12">
      <h1 className="text-black font-bold text-xl sm:text-3xl xl:text-6xl">
        Rent Quality bikes
        <br /> with <span className="text-primary">Rentnhop</span>
      </h1>
      <section className="flex gap-0">
        <Button
          className={cn(
            "text-gray-400 border-2 border-gray-400 rounded-lg rounded-tr-none rounded-br-none bg-transparent border-r-0",
            activeTab === TabsValue.BIKE &&
              "bg-primary-foreground border-primary text-primary",
            "flex justify-center items-center gap-1"
          )}
          onClick={() => setActiveTab(TabsValue.BIKE)}
        >
          <Moped />
          Bike
        </Button>
        <div className="w-[2px] h-full bg-primary"></div>
        <Button
          className={cn(
            "text-gray-400 border-2 border-gray-400 rounded-lg rounded-tl-none rounded-bl-none bg-transparent border-l-0",
            activeTab === TabsValue.CAR &&
              "bg-primary-foreground border-primary text-primary",
            "flex justify-center items-center gap-1"
          )}
          onClick={() => setActiveTab(TabsValue.CAR)}
        >
          <CarSVG />
          Car
        </Button>
      </section>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          <FormField
            control={form.control}
            name="vendorSubTypeIds"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Service Type</FormLabel>
                {/* <Select
                    onValueChange={(value) => {
                      console.log("onchange: ", value, parseInt(value));
                      form.setValue("vendorSubTypeId", parseInt(value));
                    }}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue>
                          {form.getValues("vendorSubTypeId") === 0
                            ? "Select a service type"
                            : arr.find((item) => item.id === form.getValues("vendorSubTypeId"))?.subType}
                        </SelectValue>
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent
                      className="flex max-h-60 w-full
                    flex-col gap-2 overflow-y-auto"
                    >
                      {isPending ? (
                        <ul className="flex flex-col gap-2">
                          {[1, 2, 3, 4].map((_, idx) => (
                            <Skeleton key={idx} className="h-6 w-full bg-gray-100" />
                          ))}
                        </ul>
                      ) : isError ? (
                        <div className="h-12 text-gray-600">Error fetching data</div>
                      ) : (
                        arr.map((item) => (
                          <SelectItem key={item.id} value={`${item.id}`} className="transition hover:bg-gray-100">
                            {item.subType}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select> */}
                {/* <MultipleSelectorComp arr={selected} setArr={setSelected} defaultOptions={arr} /> */}
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <Textarea
                  {...field}
                  className="input"
                  placeholder="Enter description for your selected service type"
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={submitPending}>
            {submitPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
