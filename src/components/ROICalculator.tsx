'use client';

import { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';

export function ROICalculator() {
  const [teamSize, setTeamSize] = useState(50);
  const [avgDealSize, setAvgDealSize] = useState(150000);
  const [currentWinRate, setCurrentWinRate] = useState(25);

  // Calculate improvements with ReflectivAI
  const improvedWinRate = Math.min(currentWinRate * 1.15, 45); // 15% improvement, capped at 45%
  const improvedDealSize = avgDealSize * 1.08; // 8% larger deals
  const timeS aved = teamSize * 10; // 10 hours per rep per month

  // Calculate ROI
  const dealsPerRep = 12; // per year
  const currentRevenue = teamSize * dealsPerRep * (currentWinRate / 100) * avgDealSize;
  const improvedRevenue = teamSize * dealsPerRep * (improvedWinRate / 100) * improvedDealSize;
  const revenueIncrease = improvedRevenue - currentRevenue;
  
  const platformCost = teamSize * 200 * 12; // $200/user/month
  const netGain = revenueIncrease - platformCost;
  const roiPercentage = ((netGain / platformCost) * 100).toFixed(0);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="w-full py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-4">
            <Calculator className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-3xl font-bold mb-4">ROI Calculator</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See the potential impact of ReflectivAI on your sales team. Adjust the sliders to match your organization.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Input Controls */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-lg">Your Team Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Team Size</Label>
                  <span className="text-2xl font-bold text-accent">{teamSize}</span>
                </div>
                <Slider
                  value={[teamSize]}
                  onValueChange={(value) => setTeamSize(value[0])}
                  min={5}
                  max={500}
                  step={5}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">Number of sales reps</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Avg Deal Size</Label>
                  <span className="text-2xl font-bold text-accent">
                    {formatCurrency(avgDealSize)}
                  </span>
                </div>
                <Slider
                  value={[avgDealSize]}
                  onValueChange={(value) => setAvgDealSize(value[0])}
                  min={50000}
                  max={1000000}
                  step={10000}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">Average contract value</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Label className="text-sm font-medium">Current Win Rate</Label>
                  <span className="text-2xl font-bold text-accent">{currentWinRate}%</span>
                </div>
                <Slider
                  value={[currentWinRate]}
                  onValueChange={(value) => setCurrentWinRate(value[0])}
                  min={10}
                  max={40}
                  step={1}
                  className="w-full"
                />
                <p className="text-xs text-muted-foreground">Percentage of deals won</p>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            <Card className="border-2 border-accent bg-accent/5">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-accent" />
                  Annual Revenue Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Current Annual Revenue</p>
                    <p className="text-2xl font-bold">{formatCurrency(currentRevenue)}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">With ReflectivAI</p>
                    <p className="text-3xl font-bold text-accent">
                      {formatCurrency(improvedRevenue)}
                    </p>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-1">Revenue Increase</p>
                    <p className="text-2xl font-bold text-green-500">
                      +{formatCurrency(revenueIncrease)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <DollarSign className="h-6 w-6 text-accent mx-auto mb-2" />
                    <p className="text-3xl font-bold text-accent">{roiPercentage}%</p>
                    <p className="text-xs text-muted-foreground mt-1">ROI</p>
                  </div>
                  <div className="text-center p-4 bg-muted/50 rounded-lg">
                    <Users className="h-6 w-6 text-accent mx-auto mb-2" />
                    <p className="text-3xl font-bold text-accent">{timeSaved}h</p>
                    <p className="text-xs text-muted-foreground mt-1">Time Saved/Month</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-sm opacity-90 mb-2">Net Annual Gain</p>
                  <p className="text-4xl font-bold mb-4">{formatCurrency(netGain)}</p>
                  <p className="text-sm opacity-75">
                    Based on 15% win rate improvement and 8% larger deal sizes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            These calculations are based on average improvements seen by ReflectivAI customers. Actual results may vary based on your team's starting point and engagement level.
          </p>
        </div>
      </div>
    </div>
  );
}
