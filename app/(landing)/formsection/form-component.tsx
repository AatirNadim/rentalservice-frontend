"use client";

import CarSVG from "@/app/components/assets/car";
import Moped from "@/app/components/assets/moped";
import { Button } from "@/app/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
  Form,
  FormControl,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { Toast } from "@/app/components/ui/toast";
import { toast } from "@/app/components/ui/use-toast";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import { CalendarIcon, Loader2 } from "lucide-react";
import { Calendar } from "@/app/components/ui/calendar";

enum TabsValue {
  BIKE = "bike",
  CAR = "car",
}

const formSchema = z.object({
  location: z.string().min(1, "Location is required"),
  pickUpDate: z.date(),
  dropOffDate: z.date(),
});

const FormComponent = () => {
  const [activeTab, setActiveTab] = React.useState<TabsValue>(TabsValue.BIKE);

  type formType = z.infer<typeof formSchema>;
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      location: "",
      pickUpDate: new Date(),
      dropOffDate: new Date(),
    },
  });

  const onSubmit = (formData: formType) => {
    try {
      console.log("formData: ", formData);
    } catch (err: any) {
      console.error(err);
      toast({
        variant: "destructive",
        description: err.error || err.message || "Error submitting data",
      });
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center gap-4 md:gap-4 lg:gap-6 p-4 md:p-8 lg:p-12
      w-full
    "
    >
      <h1 className="text-black font-bold text-xl sm:text-3xl xl:text-6xl">
        Rent Quality bikes
        <br /> with <span className="text-primary">RentalService</span>
      </h1>
      <section className="flex gap-0 h-[40px]">
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
        <div className="w-[2px] h-full bg-primary" />
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
          className="w-full space-y-6 text-black"
        >
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <Select onValueChange={field.onChange}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue
                        placeholder="Choose your location"
                        className="!text-gray-400"
                      />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
                <FormDescription></FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <section className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
            <FormField
              control={form.control}
              name="pickUpDate"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 flex-1 w-full">
                  <FormLabel>Pickup Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="dropOffDate"
              render={({ field }) => (
                <FormItem className="grid grid-cols-1 flex-1 w-full">
                  <FormLabel>Return Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </section>
          <Button
            type="submit"
            className="rounded-full w-full font-bold hover:bg-primary-foreground hover:text-secondary"
          >
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Search bikes
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComponent;
